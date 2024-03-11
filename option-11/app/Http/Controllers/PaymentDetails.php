<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Orders;
use App\Models\Basket;
use App\Models\Products;
use Stripe\Customer;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\OrderItem;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class PaymentDetails extends Controller
{

    public function payment () {

        $basket = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->first();


        if(is_null($basket)) {
            return redirect()->back();

        }else {
            return Inertia::render('Checkout');
        }



    }



    public function addPayment (Request $request) {

        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));


        $basket = Basket::with('products')->where('userid', auth()->user()->userid)->where('status', 'open')->get();
        $lineItems = [];
        $customer = Customer::create([

            'email' => auth()->user()->email,




        ]);
        foreach ($basket as $product) {

            $lineItems[] = [
                'price_data' => [
                    'currency'     => 'gbp',
                    'product_data' => [
                        'name' => $product->products->productname,
                    ],
                    'unit_amount'  => round( $product->totalprice *100,1),
                ],
                'quantity'   => 1,
            ];
        }




        $session = \Stripe\Checkout\Session::create([
            'shipping_address_collection' => ['allowed_countries' => ['GB']],
            'line_items' => $lineItems,
            'customer' => $customer->id,
            "metadata" => array("cus_id" => $customer->id,"userid" =>auth()->user()->userid ),
            'mode' => 'payment',
            'success_url' => route('success') . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('cancel') . "?session_id={CHECKOUT_SESSION_ID}",
        ]);







        return Inertia::location($session->url);






    }

    public function cancel(Request $request) {


        $sessionId = $request->get('session_id');



       Orders::where('sessionid',  $sessionId)->delete();

        Orders::where('addressid',   null  )->delete();
        return Redirect::route('basket');

    }

    public function finalizeOrder (Request $request) {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $sessionId = $request->get('session_id');

        $session = \Stripe\Checkout\Session::retrieve($sessionId);
        try {

            if(!$session) {

                throw new NotFoundHttpException;

            }


        $checkOrder = Orders::where('userid', auth()->user()->userid)->first();

        if (!$checkOrder) {
            throw new NotFoundHttpException;

        }
        $total = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->delete();

        } catch (Exception $e) {

            throw new NotFoundHttpException;
        }

        return Redirect::route('basket');
    }
}
