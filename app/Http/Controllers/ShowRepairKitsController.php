<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\RepairKit;
use App\Models\Basket;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowRepairKitsController extends Controller
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
//The show all function is used to display all the repair kits
//it works by using Inertia render to get the jsx page and then passing the repair kit jsx object to the page as an array
     public function showAll() {
        $repairkits = RepairKit::all();
        return Inertia::render('RepairKits', ['repairKit' => $repairkits]); // Corrected the key to 'repairKits'
    }


public function addBasket(Request $request) {

    

        $basket = new Basket();
        $basket->userid =  auth()->user()->userid;
        $basket->repairkitsid = request('repairkitsid_hidden');
        $basket->quantity =request('quantity');
        
        $bike = RepairKit::where('repairkitsid',$basket->repairkitsid)->first();
        $basket->totalprice = $basket->quantity * $bike->price;
        $bike->stockquantity = $bike->stockquantity -  $basket->quantity;
    
        $basket->status = 'open';
        $basket->save();

        return Redirect::route('repairKits');

}
}
