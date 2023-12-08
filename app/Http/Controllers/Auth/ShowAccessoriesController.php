<?php

namespace App\Http\Controllers\Auth;

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

    public function showAll()
    {
        $accessories = Accessory::all();
        return Inertia::render('AccessoryProducts', ['accessories' => $accessories]);
    }

    public function addBasket(Request $request)
    {
        $basket = new Basket();
        $basket->userid = auth()->user()->userid; // Assuming the user id is 'userid'
        $basket->accessoryid = $request->input('accessoryid_hidden'); // Update to 'accessoryid_hidden'
        $basket->quantity = $request->input('quantity');
        $basket->totalprice = $basket->quantity * $request->input('price_hidden');
        $basket->status = 'open';
        $basket->save();

        return Redirect::route('AccessoryProducts'); // Update to 'AccessoryProducts'
    }
}
