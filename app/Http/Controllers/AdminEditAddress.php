<?php

namespace App\Http\Controllers;
use App\Models\Address;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Notification;
use Illuminate\Support\Facades\Redirect;
class AdminEditAddress extends Controller
{


    public function view(){
        $address = Address::all();

        return Inertia::render('AdminViewAddress', ['address' => $address]);


    }
    public function show($addressid){
        $address = Address::where('addressid',$addressid)->first();



        return Inertia::render('AdminEditAddress', ['address' => $address]);


    }


    public function update(Request $request){




    Address::where('addressid',$request->addressid)->update([
            'postcode' => $request->postcode,
            'country' => $request->country,
            'city' => $request->city,
            'street' => $request->street






        ]);

        $address = Address::where('addressid',$request->addressid)->first();

        $notification = new Notification();
        $notification->notification_type = "log";
        $notification->notification_title = "Address has been modified";
        $orderTime = \Carbon\Carbon::parse( $address->created_at)->format('d/m/Y H:i:s');

        $notification->notification_description = "address $address->addressid of user $address->userid has been changed at $orderTime";
        $notification->save();



        return Redirect::route('address');


    }
}
