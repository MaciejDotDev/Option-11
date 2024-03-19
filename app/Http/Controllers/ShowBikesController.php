<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Bikes;
use Illuminate\Support\Facades\Redirect;
use App\Models\Clothes;
use App\Models\Basket;
use Inertia\Inertia;


class ShowBikesController extends Controller
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








public function showAll() {



   


    $bikes = Bikes::all();


    return Inertia::render('BikeProducts',['bikes' => $bikes]);


  
}

public function addBasket(Request $request) {



    $validateInput = $request->validate([
        'quantity' => 'required|not_in:0',
        
        

    ]);
 
    if ($validateInput) {

        $basket = new Basket();
        $basket->userid =  auth()->user()->userid;
        $basket->bikeid = request('bikeid_hidden');
        $basket->quantity =request('quantity');
        $bike = Bikes::where('bikeid',$basket->bikeid)->first();

        $bike->stockquantity = $bike->stockquantity -  $basket->quantity;
    
        $basket->totalprice = $basket->quantity * $bike->price;
        
        $basket->status = 'open';

        //an erorr validation will be needed to add here, to check if thre is enough stock
        $basket->save();
        $bike->save();
        
   
        return Redirect::route('products',['success' => 'Item successfully added to basket!']);


    }
  

   


  
}



















}
