<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Bikes;

use App\Models\Basket;



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


    return view('/welcome')->with('bikes', $bikes);


  
}

public function addBasket(Request $request) {



   
    $validateInput = $request->validate([
        'quantity'=>'required',





    ]);

        $basket = new Basket();
        $basket->userid =  auth()->user()->userid;
        $basket->bikeid = request('bikeaddbasket');
        $basket->quantity =request('quantity');
        $basket->totalprice = $basket->quantity * request('price');
        $basket->status = 'open';
        $basket->save();
        return redirect()->back();

   


  
}



















}
