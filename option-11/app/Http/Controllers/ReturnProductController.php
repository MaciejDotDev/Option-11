<?php

namespace App\Http\Controllers;

use App\Events\ConfirmRefund;
use Illuminate\Support\Facades\Redirect;
use App\Models\ProductHistory;
use Illuminate\Http\Request;
use App\Models\Refunds;
use App\Models\OrderItem;
use App\Models\Products;
use Inertia\Inertia;

class ReturnProductController extends Controller
{
    public function showReturnForm($itemid)
    {


        $orderItem = OrderItem::find($itemid);

        $refund = Refunds::where('orderitemid', $itemid)->where('userid', auth()->user()->userid)->first();


        if ($orderItem) {
            if (!$refund) {
                return Inertia::render('ReturnProduct', ['orderitem' => $orderItem]);
            } else {

                return redirect()->back()->withErrors(['refund' => 'Your order is already being refunded!']);


            }



        } else {

            throw new NotFoundHttpException;
        }






    }

    public function showReturnStatus()
    {


    }

    public function createRefund(Request $request)
    {

        $validated = $request->validate([
            'orderItemid' => 'required|exists:orderitem,orderitemid', // Ensure 'orderItemid' exists in 'orderitems' table under the column 'id'
            'refundReason' => 'required',

        ]);
        $orderitem = OrderItem::where('orderitemid', $validated['orderItemid'])->first();
        $refund = new Refunds();

        $refund->orderitemid = $validated['orderItemid'];
        $refund->userid = auth()->user()->userid;
        $refund->totalprice = $orderitem->totalprice;
        $refund->quantity = $orderitem->quantity;
        $refund->status = "dispatched";
        $refund->is_refunded = false;
        $refund->reason_refund = $validated['refundReason'] . "-" . $request->other;
        $refund->save();
        return redirect()->route('dashboard')->with('success', "Thank you! Your refund is being process, you will soon recieve an email, for further information");
    }




}
