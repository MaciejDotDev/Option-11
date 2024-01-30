<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use App\Models\Basket;
use App\Models\Bikes;
use App\Models\BikePart;
use App\Models\Clothes;
use App\Models\RepairKit;
use App\Models\Accessory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Redirect;

class ManageBasketController extends Controller
{
    //

    public function search() 
{
    $basket = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->get();

    $totalPrice = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->sum('totalprice');
    
    $bikes = [];
    foreach ($basket as $item) {

        $bike = Bikes::where('bikeid', $item->bikeid)->first();
        $bikePart = BikePart::where('bikepartsid', $item->bikepartsid)->first();
        $clothes = Clothes::where('clothingid', $item->clothingid)->first();
        $repairkits = RepairKit::where('repairkitsid', $item->repairkitsid)->first();
        $accessory = Accessory::where('accessoryid', $item->accessoryid)->first();
        if ($bike) {


            $bikes[] = $bike;
            
        } else if ($bikePart) {

            $bikes[] = $bikePart;


        } else if ($clothes) {


            $bikes[] = $clothes;


            
        }  else if ($repairkits) {


            $bikes[] = $repairkits;


            
        }  else if ($accessory) {


            $bikes[] = $accessory;


            
        }



    }
    
    
    return Inertia::render('Basket',['basket' => $basket, 'totalprice' => $totalPrice, 'bikes' => $bikes ]);

    
}


public function deleteProduct(Request $request)
{
 
    
    $basket = Basket::where('userid', auth()->user()->userid)->get();
    $basketid =$request->input('basketid');

    $projects = Basket::where('basketid', $basketid);

    $projects->delete();

 

  
}




}


