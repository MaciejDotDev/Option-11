<?php

namespace App\Http\Controllers;
use App\Models\Address;
use Illuminate\Http\Request;
use Inertia\Inertia;
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

        return Redirect::route('address');


    }
}
