<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\Refunds;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class AdminRefundsController extends Controller
{
    public function AdminViewRedunds(Request $request)
    {
        $refunds = Refunds::all();
        return Inertia::render('AdminViewRedunds', ['refunds' => $refunds]);
    }

    public function updateShow(Request $request, $refundid)
    {

        $refund = Refunds::where('refundid', $refundid)->first();


        return Inertia::render('AdminEditRefund', ['refund' => $refund]);




    }

    public function update(Request $request)
    {

        $validateInput = $request->validate([
            'refundid' => 'required',
            'reason_refund' => 'required|string',
            'is_refunded' => 'required|boolean',
            'totalprice' => 'required|numeric',
            'status' => 'required|string',
            'quantity' => 'required|numeric',


        ]);



        if ($validateInput) {


            Refunds::where('refundid', $request->refundid)->update([
                'reason_refund' => $request->reason_refund,
                'is_refunded' => $request->is_refunded,
                'totalprice' => $request->totalprice,
                'status' => $request->status,
                'quantity' => $request->quantity,




            ]);

            $refund = Refunds::where('refundid', $request->refundid)->first();

            $notification = new Notification();
            $notification->notification_type = "log";
            $notification->notification_title = "Refund status changed";
            $orderTime = \Carbon\Carbon::parse($refund->created_at)->format('d/m/Y H:i:s');

            $userid = $refund->userid;

            $notification->notification_description = "Refund for User $userid for order item $refund->orderitemid, on $orderTime has been changed";
            $notification->save();

        } else {

            return redirect()->back()->withErrors(['empty' => 'Invalid input!']);
        }








        return Redirect::to('/admin/refunds');
    }

    public function delete(Request $request, $refundid)
    {



        $user = Refunds::where('refundid', $refundid);




        $user->delete();
        $notification = new Notification();
        $notification->notification_type = "log";
        $notification->notification_title = "User has deleted";
        $orderTime = \Carbon\Carbon::parse($user->created_at)->format('d/m/Y H:i:s');

        $product = $user->userid;

        $notification->notification_description = "User $product, at $orderTime has been deleted";
        $notification->save();

        return Redirect::to('/adminUsers');
    }

}
