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

        //to validate if item already exists inside the database, as well as a plus or minus button to increase quantity

        $validateInput = $request->validate([
            'quantity' => 'required|not_in:0',
            
            
    
        ]);
     
        if ($validateInput) {





             
        $finditem =  Basket::where('userid', auth()->user()->userid)->first();
        $basket = new Basket();

        $noRecords = false;

        if ($finditem  ==  null || $noRecords) { 


            $basket = new Basket();
            $basket->userid =  auth()->user()->userid;
            $basket->accessoryid = request('accessoryid_hidden');
            $basket->quantity =request('quantity');
            
            $bike = Accessory::where('accessoryid',$basket->accessoryid)->first();
            $basket->totalprice = $basket->quantity * $bike->price;
            $bike->stockquantity = $bike->stockquantity -  $basket->quantity;
        
            $basket->status = 'open';
            $basket->save();
    
            return redirect()->back()->with('success', "Item successfully added to basket!");

        }

        $record = Basket::where('userid', auth()->user()->userid)->where('accessoryid',  request('accessoryid_hidden'))->first();


        if ($record) {

            $record->quantity = request('quantity') + $record->quantity;

            $record->save();

            return redirect()->back()->with('success', "Item successfully added to basket!");

           




        } else { 
            $noRecords =  true;

        }



    

        }
    }
}
