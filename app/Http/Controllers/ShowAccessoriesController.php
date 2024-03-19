<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Accessory;
use App\Models\Basket;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowAccessoriesController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function showAll()
    {
        $accessories = Accessory::all();
        return Inertia::render('AccessoryProducts', ['accessories' => $accessories]);
    }

    public function addBasket(Request $request)
    {
        $validateInput = $request->validate([
            'quantity' => 'required|not_in:0',
            
            
    
        ]);
     
        if ($validateInput) {

        $basket = new Basket();
        $basket->userid =  auth()->user()->userid;
        $basket->accessoryid = request('accessoryid_hidden');
        $basket->quantity =request('quantity');
        
        $bike = Accessory::where('accessoryid',$basket->accessoryid)->first();
        $basket->totalprice = $basket->quantity * $bike->price;
        $bike->stockquantity = $bike->stockquantity -  $basket->quantity;
    
        $basket->status = 'open';
        $basket->save();

        return Redirect::route('accessoryProducts');
        }
    }
}
