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
use App\Models\ProductHistory;
use App\Models\OrderItem;
use App\Models\Categories;
use App\Models\Address;

use App\Models\Transactions;
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
                    'unit_amount'  => round(  $product->products->price *100,1),
                ],
                'quantity'   => $product->quantity,
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





        } catch (Exception $e) {

            throw new NotFoundHttpException;
        }

        return Redirect::route('basket');
    }


    public function webhook()
    {

        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');

        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload, $sig_header, $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {

            return response('', 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {

            return response('', 400);
        }


        switch ($event->type) {
            case 'checkout.session.completed':
                $session = $event->data->object;




                $sessionId =  $session->id;
                $paymentIntent =  $session->payment_intent;
                $customerid = $session->metadata->cus_id;
                $userid =  $session->metadata->userid;


                $status = $session->status;
                $currency =  $session->currency;
                $created =  $session->created;


                $customerDetails = $session->customer_details;


                $city = $customerDetails->address->city;
                $postcode = $customerDetails->address->postal_code;
                $line1 = $customerDetails->address->line1;
                $country = $customerDetails->address->country;





                $total = Basket::where('userid', $userid)->where('status', 'open')->get();

                $order = new Orders();
                $order->userid = $userid;
                $order->trackingcode = \Str::random(10);
                $order->sessionid = $sessionId;
                $order->totalprice = $total->sum('totalprice');
                $order->status = "paid";

                $address = new Address();
                $address->userid = $order->userid;
                $address->postcode = $postcode;
                $address->country = $country;
                $address->city = $city;
                $address->street = $line1;
                $address->save();

                $order->addressid = $address->addressid;
                $order->save();


                $basket = Basket::with('products')->where('userid', $userid)->where('status', 'open')->get();
                foreach ($basket as $product) {
                    $orderItem = new OrderItem();
                    $orderItem->productid = $product->productid;
                    $orderItem->orderid = $order->orderid;
                    $orderItem->quantity = $product->quantity;
                    $orderItem->totalprice = $product->totalprice;
                    $orderItem->save();
                    $productHistory = new ProductHistory();
                    $product1 = Categories::where('categoryid', $product->products->categoryid)->first();
                    $productHistory->productname = $product->products->productname;

                    $productHistory->category = $product1->name;

                    $productHistory->quantity = $product->quantity;
                    $productHistory->save();


                }

                $transaction = new Transactions();
                $transaction->orderid = $order->orderid;
                $transaction->paymentIntent = $paymentIntent;
                $transaction->customerid = $customerid;
                $transaction->status = $status;
                $transaction->currency = $currency;
                $transaction->creation = date('D-m-y H:i:s', $created);
                $transaction->save();


                $orderItems = OrderItem::where('orderid', $order->orderid)->get();
                foreach ($orderItems as $item) {
                    $product = Products::where('productid', $item->productid)->first();
                    $product->stockquantity -= $item->quantity;
                    $product->save();

                }


                $total = Basket::where('userid', $userid)->where('status', 'open')->delete();

            default:
                echo 'Received unknown event type ' . $event->type;
        }

        return response('');
    }
}
