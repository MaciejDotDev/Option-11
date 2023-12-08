<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Bikes;
use Illuminate\Support\Facades\Redirect;

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





//public function showAll() {

//    $bikes = Bikes::all();
//    return Inertia::render('Bikes',['bikes' => $bikes]);
//}

// ShowBikesController.php

public function showAll() {
    $bikes = Bikes::all();
    return Inertia::render('BikeProducts',['bikes' => $bikes]);
}


public function addBasket(Request $request) {

        $basket = new Basket();
        $basket->userid =  auth()->user()->userid;
        $basket->bikeid = request('bikeid_hidden');
        $basket->quantity =request('quantity');
        $basket->totalprice = $basket->quantity * request('price_hidden');

        $basket->status = 'open';
        $basket->save();

        return Redirect::route('BikeProducts');

}
}
