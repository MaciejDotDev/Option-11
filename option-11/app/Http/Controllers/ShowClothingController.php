<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;


use App\Models\Categories;
use App\Models\Basket;
use App\Models\Clothes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Http\Controllers\ManageBasketController;
class ShowClothingController extends ManageBasketController
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
        $clothes =  Clothes::with('products')->get();
        return Inertia::render('Clothing', ['clothes' => $clothes]);
    }



    public function showIndividual(Request $request) {



    }


}
