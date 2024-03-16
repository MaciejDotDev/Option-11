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



    public function show()
    {

        $orders = Orders::with('transaction')->get();

        return Inertia::render('AdminViewOrder', ['orders' => $orders]);

    }




    public function editOrder(Request $request, $orderid)
    {

        $orders = Orders::with('transaction')->where('orderid', $orderid)->first();

        return Inertia::render('AdminEditOrder', ['orders' => $orders]);
    }

    public function updateOrder(Request $request)
    {

        $validateInput = $request->validate([ //need to improve the validation amongst all controllers forms
            'trackingcode' => 'required',
            'totalPrice' => 'required|numeric|not_in:0|gt:0',
            'status' => 'required',
            'transactionid' => 'required',
            'customerId' => 'required',





        ]);


        if ($validateInput) {


            Orders::where('orderid', $request->orderid)->update([
                'trackingcode' => $request->trackingcode,
                'totalprice' => $request->totalPrice,
                'status' => $request->status,






            ]);
        }


        $transaction = Transactions::where('orderid', $request->orderid)->first();
        if ($transaction) {
            $transaction->update([
                'paymentIntent' => $request->transactionid,
                'customerid' => $request->customerId,
            ]);
        }


        return $this->show();
    }




    public function updateAddress(Request $request)
    {


        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $transaction = Transactions::where('orderid', $request->orderid)->first();


        $paymentMethod = \Stripe\PaymentMethod::update(
            $transaction->paymentIntent, // Replace with the actual payment method ID
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

    public function deleteOrder($orderid)
    {


        Orders::where('orderid', $orderid)->delete();

        return $this->show();





    }


    public function getOrderItems($orderid)
    {

        $ordersItems = OrderItem::with('products')->where('orderid', $orderid)->get();


        return Inertia::render('AdminViewOrderItems', ['ordersItems' => $ordersItems]);

    }

    public function editItemOrderPage($itemOrderid)
    {

        $ordersItem = OrderItem::with('products')->where('orderitemid', $itemOrderid)->first();

        $products = Products::all();
        return Inertia::render('AdminEditOrderItem', ['product' => $ordersItem, 'products' => $products]);

    }

    public function editOrderItem(Request $request)
    {


        $validateInput = $request->validate([ //need to improve the validation amongst all controllers forms
            'itemid' => 'required',
            'productid' => 'required',
            'quantity' => 'required|numeric|not_in:0|gt:0',





        ]);

        if ($validateInput) {
            $product = Products::where('productid', $request->productid)->first();
            if ($product->stockquantity -request('quantity') >= 0 ) {

                $ordersItem = OrderItem::with('products')->where('orderitemid', $request->itemid)->first();

                $ordersItem->quantity = $request->quantity;

                $ordersItem->productid = $request->productid;

                $bike = Products::where('productid',$request->productid)->first();
                $ordersItem->totalprice = $request->quantity * $bike->price;

                $product->stockquantity -= $ordersItem->quantity;
                $product->save();
                $ordersItem->save();
                return $this->getOrderItems($ordersItem->orderid);

            } else {
                return redirect()->back()->withErrors(['stock' => 'Not enough stock!']);

            }



        }




    }
}
