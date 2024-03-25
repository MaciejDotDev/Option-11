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
use App\Events\OrderPlacedEvent;
use App\Models\Transactions;
use App\Models\Notification;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class PaymentDetails extends Controller
{




    public function stripeCheckout (Request $request) {

        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));


        $basket = Basket::with('products')->where('userid', auth()->user()->userid)->where('status', 'open')->get();
        $lineItems = [];
        $customer = Customer::create([

            'email' => auth()->user()->email,




        ]); // allows to createa customer so tey can be identified through their emiail and cus_id
        foreach ($basket as $product) { // going through the basket and creating a data strocutre to the requirements of stripe

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




        $session = \Stripe\Checkout\Session::create([ //prepares data to be sent through the api
            'shipping_address_collection' => ['allowed_countries' => ['GB']], //allows to create  a shipping address for  users in GB.
            'line_items' => $lineItems,
            'customer' => $customer->id,
            "metadata" => array("cus_id" => $customer->id,"userid" =>auth()->user()->userid ), // we send the cus_id and userid, for cus because then we can track customers with their transactions and user id because webhooks can't detect the current session
            'mode' => 'payment',
            'success_url' => route('success') . "?session_id={CHECKOUT_SESSION_ID}", //  this is the route if the payment is succesfful we send the checkout session id to confirm that is stripe sending webhook event
            'cancel_url' => route('cancel') . "?session_id={CHECKOUT_SESSION_ID}", /// if the user clicsk on cancel this is where they go
        ]);







        return Inertia::location($session->url); // specific function allowing users to go outside the website, preventing cross-origin






    }

    public function cancel(Request $request) {
        //cleaning up by removing any order associated with the sessionid

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

            if(!$session) { //ensures that a sessionid is valid before keeping going

                throw new NotFoundHttpException;

            }





        } catch (Exception $e) {

            throw new NotFoundHttpException;
        }

        return Redirect::route('basket');
    }


    public function webhook()
    { // triggers from the stripe website

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
                $session = $event->data->object; // all the json data of the webhook call



//below we're getting all data associated with stripe and storing it in the db
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
              // Saves the order and stores orderid implicitly since it's generated by the database

                $address = new Address();
                $address->userid = $order->userid;
                $address->postcode = $postcode;
                $address->country = $country;
                $address->city = $city;
                $address->street = $line1;
                $address->save();

                $order->addressid = $address->addressid;








                $order->save();

                $notification = new Notification();
                $notification->notification_type = "orders";
                $notification->notification_title = "Order created";
                $orderTime = \Carbon\Carbon::parse( $order->created_at)->format('d/m/Y H:i:s');

                $orderid = $order->orderid;

                $notification->notification_description = "New order created by user: $userid, with order id: $orderid, at $orderTime";
                $notification->save();

                event(new OrderPlacedEvent($notification->notification_description)); // creates an event which allows live notification with event controllers and using pusher

                $basket = Basket::with('products')->where('userid', $userid)->where('status', 'open')->get();
                foreach ($basket as $product) {
                    $orderItem = new OrderItem();
                    $orderItem->productid = $product->productid;
                    $orderItem->orderid = $order->orderid;
                    $orderItem->quantity = $product->quantity;
                    $orderItem->totalprice = $product->totalprice;
                    $orderItem->save();
                    $productHistory = new ProductHistory(); //we're creating product history to log sold products
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



                foreach ($basket as $item) {
                    $product = Products::where('productid', $item->productid)->first();
                    $product->stockquantity  = $product->stockquantity - $item->quantity; //removing stock from products
                    $product->save();

                }


                $transaction->save();

                $total = Basket::where('userid', $userid)->where('status', 'open')->delete();

            default:
                echo 'Received unknown event type ' . $event->type;
        }

        return response('');
    }
}
