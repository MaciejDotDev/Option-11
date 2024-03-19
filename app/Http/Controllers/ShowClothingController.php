<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Clothes;
use App\Models\Basket;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowClothingController extends Controller
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
        $clothes = Clothes::all();
        return Inertia::render('Clothing', ['clothes' => $clothes]);
    }
    public function addBasket(Request $request) {

        $validateInput = $request->validate([
            'quantity' => 'required|not_in:0',
            
            
    
        ]);
     
        if ($validateInput) {

    

        $basket = new Basket();
        $basket->userid =  auth()->user()->userid;
        $basket->clothingid = request('clothingid_hidden');
        $basket->quantity =request('quantity');
        
        $bike = Clothes::where('clothingid',$basket->clothingid)->first();
        $basket->totalprice = $basket->quantity * $bike->price;
        $bike->stockquantity = $bike->stockquantity -  $basket->quantity;
    
        $basket->status = 'open';
        $basket->save();

        return Redirect::route('clothing');
        }

}
   
}
