<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ManageBasketController;

use App\Models\Categories;
use App\Models\Products;
use App\Models\Basket;
use App\Models\Accessory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Reviews;

class ShowAccessoriesController extends ManageBasketController
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

        $accessories = Accessory::with('products')->get();
        return Inertia::render('AccessoryProducts');
    }


    public function search()
    {


        $products = Accessory::with('products')->get();


        return response()->json($products);// Corrected the key to 'bikeParts'
    }


    public function showIndividual($productid)
    {

        $bike = Accessory::with('products')->where('productid', $productid)->first();

        $reviews = Reviews::with('user')->where('productid', $productid)->orderBy('created_at', 'DESC')
            ->get(); // this one is the one in actual production changed so now it also gets based on the product id

        $stars = Reviews::where('productid', $productid)->get();


        $starTotal = [];

        foreach ($stars as $item) {

            $starTotal[] = $item->stars;

        }
        if ($starTotal == null) {

            return Inertia::render('ShowAccessory', ['product' => $bike, 'reviews' => $reviews]);
        }
        $starsAvg = round(array_sum($starTotal) / $stars->count(), 1);

        $commentsCount = $stars->count();






        return Inertia::render('ShowAccessory', ['product' => $bike, 'reviews' => $reviews, 'starsAvg' => $starsAvg, 'commentsCount' => $commentsCount]);


    }











}
