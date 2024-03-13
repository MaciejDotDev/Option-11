<?php

namespace App\Jobs\StripeWebhooks;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Spatie\WebhookClient\Models\WebhookCall;

use App\Models\Orders;
use App\Models\OrderItem;
use App\Models\Basket;
use App\Models\Address;
use App\Models\Products;
use App\Models\Transactions;

class HandleChargeableSource implements ShouldQueue
{
    use InteractsWithQueue, Queueable, SerializesModels;

    /** @var \Spatie\WebhookClient\Models\WebhookCall */
    public $webhookCall;

    public function __construct(WebhookCall $webhookCall)
    {
        $this->webhookCall = $webhookCall;
    }

    public function handle()
    {



        $sessionId = $this->webhookCall->payload['data']['object']['id'];
        $paymentIntent = $this->webhookCall->payload['data']['object']['payment_intent'];
        $customerid = $this->webhookCall->payload['data']['object']['metadata']['cus_id'];
        $userid = $this->webhookCall->payload['data']['object']['metadata']['userid'];


        $status = $this->webhookCall->payload['data']['object']['status'];
        $currency = $this->webhookCall->payload['data']['object']['currency'];
        $created = $this->webhookCall->payload['data']['object']['created'];


        $customerDetails = $this->webhookCall->payload['data']['object']['customer_details'];


        $city = $customerDetails['address']['city'];
        $postcode = $customerDetails['address']['postal_code'];
        $line1 = $customerDetails['address']['line1'];
        $country = $customerDetails['address']['country'];




       // Assuming $sessionId is correctly defined elsewhere in your code


// Assuming $total is a collection of Basket items
$total = Basket::where('userid', $userid)->where('status', 'open')->get();

$order = new Orders();
$order->userid = $userid;
$order->trackingcode = "not provided yet";
$order->sessionid = $sessionId;
$order->totalprice = $total->sum('totalprice');
$order->status = "paid";

$address = new Address();
$address->userid = $order->userid;
$address->postcode = $postcode;
$address->country = $country;
$address->city = $city;
$address->street = $line1;
$address->save(); // Save address first to get its ID

$order->addressid = $address->addressid; // Use the correct property to get the ID
$order->save();

// Assuming Basket and OrderItem models are correctly defined
$basket = Basket::with('products')->where('userid', $userid)->where('status', 'open')->get();
foreach ($basket as $product) {
    $orderItem = new OrderItem();
    $orderItem->productid = $product->productid;
    $orderItem->orderid = $order->orderid;
    $orderItem->quantity = $product->quantity;
    $orderItem->save();
}

$transaction = new Transactions();
$transaction->orderid = $order->orderid;
$transaction->paymentIntent = $paymentIntent;
$transaction->customerid = $customerid;
$transaction->status = $status;
$transaction->currency = $currency;
$transaction->creation = date('D-m-y H:i:s', $created);
$transaction->save();

// Update product stock quantities
$orderItems = OrderItem::where('orderid', $order->orderid)->get();
foreach ($orderItems as $item) {
    $product = Products::where('productid', $item->productid)->first();
    $product->stockquantity -= $item->quantity;
    $product->save();
}



    }
}
