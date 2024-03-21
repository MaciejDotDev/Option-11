<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Basket;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\Products;
use App\Models\Transactions;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Stripe\Customer;
use Stripe\Stripe;

class AdminEditOrders extends Controller
{



    public function show() {

        $orders = Orders::with('transaction')->get();

        return Inertia::render('AdminViewOrder', ['orders' => $orders]);

    }




    public function editOrder(Request $request, $orderid) {

        $orders = Orders::with('transaction')->where('orderid',$orderid)->first();

        return Inertia::render('AdminEditOrder', ['orders' => $orders]);
    }

    public function updateOrder() {

        $orders = Orders::with('orderitems','transaction','orderitems.products','user')->get();

        return Inertia::render('AdminEditOrder', ['orders' => $orders]);
    }

    public function updateAddress (Request $request) {


        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
       $transaction  =  Transactions::where('orderid', $request->orderid)->first();


        $paymentMethod = \Stripe\PaymentMethod::update(
        $transaction->paymentIntent , // Replace with the actual payment method ID
         [
            'billing_details' => [
                'address' => [
                    'line1' => $request->street + $request->housenum,

                    'city' => $request->city,
                    'state' => $request->state,
                    'postal_code' => $request->postalcode,
                    'country' => $request->country,
                ],
            ],
         ]
        );
            }
}
