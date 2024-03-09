<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Orders;
use App\Models\Basket;
use App\Models\Products;
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
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('success') . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('basket'),  
        ]);

        $total = Basket::where('userid', auth()->user()->userid)->where('status', 'open');
        $order = new Orders();
        $order->userid = auth()->user()->userid;
        $order->trackingcode = "not provided yet";
        $order->addressid =  null;
        $order->sessionid = $session->id;
        $order->totalprice = $total->sum('totalprice');
        $order->status = "unpaid";
        $order->save();
        $basket = Basket::with('products')->where('userid', auth()->user()->userid)->where('status', 'open')->get();
        foreach ($basket as $product) {
            $orderItem = new OrderItem();
            $orderItem->productid = $product->productid;
            $orderItem->orderid = $order->orderid;

            $orderItem->save();

        }
        return Inertia::location($session->url);
 
          

      


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
