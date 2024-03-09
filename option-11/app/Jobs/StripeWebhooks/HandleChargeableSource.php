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
use App\Models\StripeTransactions;

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
        $status = $this->webhookCall->payload['data']['object']['status'];
        $currency = $this->webhookCall->payload['data']['object']['currency'];
        $created = $this->webhookCall->payload['data']['object']['created'];


        $customerDetails = $this->webhookCall->payload['data']['object']['customer_details'];

        // Extracting individual customer details
        $city = $customerDetails['address']['city'];
        $postcode = $customerDetails['address']['postal_code'];
        $line1 = $customerDetails['address']['line1'];
        $country = $customerDetails['address']['country'];
        $order = Orders::where('sessionid',   $sessionId  )->first();


        $address = new Address();
        $address->userid = $order->userid;
        $address->postcode = $postcode;
        $address->country  = $country;
        $address->city = $city;
        $address->street =$line1;
        $address->save();
        $order->addressid = $address->addressid;
        $order->status = "paid";
        $transaction = new StripeTransactions();
        $transaction->orderid = $order->orderid;
        $transaction->customerid = $paymentIntent;
        $transaction->status = $status;
        $transaction->currency = $currency;
        $transaction->creation = date('Y-m-d H:i:s',  $created);
        $transaction->paymentMethod = "dsds";




        $transaction->save();
        $order->save();


    }
}
