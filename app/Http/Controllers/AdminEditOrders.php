<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\Products;
use App\Models\Transactions;
use App\Models\User;
use Illuminate\Http\Request;

use Inertia\Inertia;

use App\Models\Notification;

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
        } else {

            return redirect()->with('error', 'something has gone wrong');
        }

        $order = Orders::where('orderid', $request->orderid)->first();
        $notification = new Notification();
        $notification->notification_type = "log";
        $notification->notification_title = "Order has been modified";
        $orderTime = \Carbon\Carbon::parse($order->created_at)->format('d/m/Y H:i:s');

        $notification->notification_description = "Order $order->orderid  of user $order->userid has been modified at $orderTime";

        $notification->save();

        return $this->show();
    }




    public function deleteOrder($orderid)
    {


        $order = Orders::where('orderid', $orderid)->first();

        $notification = new Notification();
        $notification->notification_type = "log";
        $notification->notification_title = "Order has been deleted";
        $orderTime = \Carbon\Carbon::parse($order->created_at)->format('d/m/Y H:i:s');

        $notification->notification_description = "Order $order->orderid  of user $order->userid has been deleted at $orderTime";

        $notification->save();

        $order->delete();

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
            if ($product->stockquantity - request('quantity') >= 0) {

                $ordersItem = OrderItem::with('products')->where('orderitemid', $request->itemid)->first();
                $ordersItem->quantity = $request->quantity;
                $ordersItem->productid = $request->productid;
                $ordersItem->totalprice = $request->quantity * $product->price;
                $product->stockquantity -= $ordersItem->quantity;
                $product->save();
                $ordersItem->save();
                $this->updateTotalPrice($ordersItem->orderid);
                $notification = new Notification();
                $notification->notification_type = "log";
                $notification->notification_title = "Order items have been modified";
                $orderTime = \Carbon\Carbon::parse($ordersItem->created_at)->format('d/m/Y H:i:s');

                $notification->notification_description = " Order item $ordersItem->orderItemid of $ordersItem->orderid, at $orderTime has been modified";
                $notification->save();
                return $this->getOrderItems($ordersItem->orderid);

            } else {
                return redirect()->back()->withErrors(['stock' => 'Not enough stock!']);

            }



        }




    }

    public function deleteOrderItem (Request $request) {

        $ordersItem = OrderItem::with('products')->where('orderitemid', $request->itemid)->first();
        $bike = Products::where('productid', $ordersItem->productid)->first();
        $ordersItem->totalprice = $request->quantity * $bike->price;

        $bike->stockquantity -= $ordersItem->quantity;
        $this->updateTotalPrice($ordersItem->orderid);
        $bike->save();
        $ordersItem->delete();

        return $this->getOrderItems($ordersItem->orderid);

    }

    public function updateTotalPrice($orderid)
    {

        $totalPrice = OrderItem::where('orderid', $orderid)->get()->sum('totalprice');

        $order = Orders::where('orderid', $orderid)->first();

        $order->totalprice = $totalPrice;

        $order->save();
    }
}
