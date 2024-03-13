<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Products;
use App\Models\Categories;
use Illuminate\Support\Facades\Redirect;
use App\Models\Bikes;
use App\Models\Basket;
use Inertia\Inertia;

use App\Http\Controllers\ManageBasketController;


class ShowBikesController extends ManageBasketController
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






    $bikes =  Bikes::with('products')->get();


    return Inertia::render('BikeProducts',['bikes' => $bikes]);



}



















}
