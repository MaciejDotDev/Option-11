<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ManageBasketController;

use App\Models\Products;
use App\Models\Categories;
use App\Models\Basket;
use App\Models\RepairKit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Reviews;
class ShowRepairKitsController extends ManageBasketController
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
    public function showAll()
    {

         RepairKit::with('products')->get();
        return Inertia::render('RepairKits'); // Corrected the key to 'repairKits'
    }

    public function search (){


        $products =  RepairKit::with('products')->get();



    return response()->json($products);// Corrected the key to 'bikeParts'
    }

    public function showIndividual( $productid) {

        $bike =  RepairKit::with('products')->where('productid', $productid)->first();

        $reviews = Reviews::with('user')->where('productid', $productid)->orderBy('created_at', 'DESC')
        ->get(); // this one is the one in actual production changed so now it also gets based on the product id

    $stars = Reviews::where('productid',$productid)->get();


    $starTotal = [];

    foreach ($stars as $item) {

        $starTotal[] =  $item->stars;

    }
   if ($starTotal == null)
   {

    return Inertia::render('ShowRepairKit',['product' => $bike, 'reviews' => $reviews]);
   }
    $starsAvg  = round(array_sum($starTotal)/ $stars->count(),1);

    $commentsCount = $stars->count();






return Inertia::render('ShowRepairKit', ['product' => $bike,  'reviews' => $reviews, 'starsAvg' => $starsAvg,'commentsCount' => $commentsCount ]);

    }



}
