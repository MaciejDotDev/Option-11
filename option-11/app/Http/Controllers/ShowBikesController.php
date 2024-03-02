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
        'quantity' => 'numeric|required|not_in:0|max:10',
        
        

    ]);
 
    if ($validateInput) {

        $finditem =  Basket::where('userid', auth()->user()->userid)->first();
            $basket = new Basket();

            if ($finditem  ==  null) {

                $basket = new Basket();
                $basket->userid =  auth()->user()->userid;
                $basket->bikeid = request('bikeid_hidden');
                $basket->quantity =request('quantity');
                $bike = Bikes::where('bikeid',$basket->bikeid)->first();
        
                
            
                $basket->totalprice = $basket->quantity * $bike->price;
                
                $basket->status = 'open';
        
                //an erorr validation will be needed to add here, to check if thre is enough stock
                $basket->save();
         
               
                return redirect()->back()->with('success', "Item successfully added to basket!");


            }


            $record = Basket::where('userid', auth()->user()->userid)->where('bikeid',  request('bikeid_hidden'))->first();


            if ($record) {

                $record->quantity = request('quantity') + $record->quantity;

                $record->save();

                return redirect()->back()->with('success', "Item successfully added to basket!");

               




            } else { 
                $basket = new Basket();
                $basket->userid =  auth()->user()->userid;
                $basket->bikeid = request('bikeid_hidden');
                $basket->quantity =request('quantity');
                $bike = Bikes::where('bikeid',$basket->bikeid)->first();
        
                
            
                $basket->totalprice = $basket->quantity * $bike->price;
                
                $basket->status = 'open';
        
                //an erorr validation will be needed to add here, to check if thre is enough stock
                $basket->save();
         
               
                return redirect()->back()->with('success', "Item successfully added to basket!");

            }


       


    }
  

   


  
}



















}
