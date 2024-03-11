<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Products;
use App\Models\Categories;
use Illuminate\Support\Facades\Redirect;
use App\Models\Basket;
use App\Models\BikePart;
use Inertia\Inertia;

class ShowBikePartsController extends Controller
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

        $bikeparts =  BikePart::with('products')->get();
    
        return Inertia::render('BikeParts', ['bikePart' => $bikeparts]); // Corrected the key to 'bikeParts'
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
                $basket->productid = request('bikepartid_hidden');
                $basket->quantity =request('quantity');
                
                $bike = Products::where('productid',$basket->productid)->first();
                $basket->totalprice = $basket->quantity * $bike->price;
                $bike->stockquantity = $bike->stockquantity -  $basket->quantity;
            
                $basket->status = 'open';
                $basket->save();
                $stopLoop = false;
                return redirect()->back()->with('success', "Item successfully added to basket!");
        
            }
        
            $record = Basket::where('userid', auth()->user()->userid)->where('productid',  request('bikepartid_hidden'))->first();
        
        
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
