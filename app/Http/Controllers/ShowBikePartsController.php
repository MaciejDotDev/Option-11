<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\BikePart;
use Illuminate\Support\Facades\Redirect;

use App\Models\Basket;
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





//public function showAll() {

//    $bikes = Bikes::all();
//    return Inertia::render('Bikes',['bikes' => $bikes]);
//}

// ShowBikesController.php

public function showAll() {
    $bikeparts = BikePart::all();
    return Inertia::render('BikeProducts',['bikes' => $bikeparts]);
}


public function addBasket(Request $request) {

        $basket = new Basket();
        $basket->userid =  auth()->user()->userid;
        $basket->bikepartid = request('bikepartid_hidden');
        $basket->quantity =request('quantity');
        $basket->totalprice = $basket->quantity * request('price_hidden');

        $basket->status = 'open';
        $basket->save();

        return Redirect::route('BikeParts');

}
}
