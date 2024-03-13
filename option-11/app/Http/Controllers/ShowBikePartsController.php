<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ManageBasketController;
use App\Models\Products;
use App\Models\Categories;
use Illuminate\Support\Facades\Redirect;
use App\Models\Basket;
use App\Models\BikePart;
use Inertia\Inertia;

class ShowBikePartsController extends ManageBasketController
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



}
