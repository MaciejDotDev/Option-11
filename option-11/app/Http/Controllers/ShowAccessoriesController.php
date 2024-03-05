<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Categories;
use App\Models\Products;
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
        $categories = Categories::where('name','accessory')->first(); // go optimmise later on to use hasmany or hasone in the model

        $accessories = Products::where('categoryid',$categories->categoryid)->get();
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
    
        $stopLoop = true;
    
        while ($stopLoop) {
            if ($finditem  ==  null || $noRecords) { 
    
    
                $basket = new Basket();
                $basket->userid =  auth()->user()->userid;
                $basket->productid = request('accessoryid_hidden');
                $basket->quantity =request('quantity');
                
                $bike = Products::where('productid',$basket->productid)->first();
                $basket->totalprice = $basket->quantity * $bike->price;
                $bike->stockquantity = $bike->stockquantity -  $basket->quantity;
            
                $basket->status = 'open';
                $basket->save();
                $stopLoop = false;
                return redirect()->back()->with('success', "Item successfully added to basket!");
        
            }
        
            $record = Basket::where('userid', auth()->user()->userid)->where('productid',  request('accessoryid_hidden'))->first();
        
        
            if ($record) {
        
                $record->quantity = request('quantity') + $record->quantity;
        
                $record->save();
                $stopLoop = false;
                return redirect()->back()->with('success', "Item successfully added to basket!");
        
               
        
        
        
        
            } else { 
                $noRecords =  true;
        
            }
    
        }
    
        
    
    
    
    
    
        
        }
    }
}
