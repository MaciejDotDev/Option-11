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
use App\Models\Reviews;

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


public function search (){


    $products =  Bikes::with('products')->get();



return response()->json($products);// Corrected the key to 'bikeParts'
}
public function showIndividual($productid) {

    $bike =  Bikes::with('products')->where('productid', $productid)->first();

        $reviews = Reviews::with('user')->where('productid', $productid)->orderBy('created_at', 'DESC')
        ->get(); // this one is the one in actual production changed so now it also gets based on the product id

    $stars = Reviews::where('productid',$productid)->get();


    $starTotal = [];

    foreach ($stars as $item) {

        $starTotal[] =  $item->stars;

    }
   if ($starTotal == null)
   {

    return Inertia::render('ShowBikePage',['product' => $bike, 'reviews' => $reviews]);
   }
    $starsAvg  = round(array_sum($starTotal)/ $stars->count(),1);

    $commentsCount = $stars->count();






return Inertia::render('ShowBikePage', ['product' => $bike,  'reviews' => $reviews, 'starsAvg' => $starsAvg,'commentsCount' => $commentsCount ]);

}




















}
