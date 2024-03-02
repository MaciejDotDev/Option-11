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

     public function filter($type) {



   


      
        if(Str::contains($type, 'bikes')) {
        
            $bikes = Bikes::all();
        
            return Inertia::render('BikeProducts',['bikes' => $bikes]);
        
        
        } elseif (Str::contains($type, 'clothes')) {
        
            $clothes = Clothes::all();
        
            return Inertia::render('BikeProducts',['bikes' => $clothes]);
        
        
        
        } else {
        
            
        
            
            $clothes = Clothes::all();
        
            $bikes = Bikes::all();
        
            $data = $clothes->concat($bikes);
        
            return Inertia::render('BikeProducts',['bikes' => $data]);
        }
        
        
          
        }

  
}
