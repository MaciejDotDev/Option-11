<?php

namespace App\Http\Controllers;
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

        $refund = Refunds::find($itemid);


        if ($orderItem) {
            if (!$refund) {
                return Inertia::render('ReturnProduct', ['orderitem' => $orderItem]);
            } else {



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
        $refund->totalprice =$orderitem->totalprice;
        $refund->quantity = $orderitem->quantity;
        $refund->status = "dispatched";
        $refund->is_refunded = false;

        $refund->reason_refund = $validated['refundReason'] . "-" . $request->other;

        $refund->save();

        return Redirect::route('dashboard');
    }




}
