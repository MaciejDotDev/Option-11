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
use App\Models\Reviews;
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
    public function showAll()
    {



        return Inertia::render('BikeParts');



    }

    public function search () {

        $product =[];

        $products =[];
        $bikes =  BikePart::with('products')->get();


        foreach ($bikes as $bike) {

            if (!in_array($bike->products->productname, $product)) {
                $product[] = $bike->products->productname;
                $products[] = $bike;

            }


        }
return response()->json($products);// Corrected the key to 'bikeParts'
    }

    public function showIndividual($productid)
    {

        $bike = BikePart::with('products')->where('productid', $productid)->first();

        $reviews = Reviews::with('user')->where('productid', $productid)->orderBy('created_at', 'DESC')
            ->get(); // this one is the one in actual production changed so now it also gets based on the product id

        $stars = Reviews::where('productid', $productid)->get();


        $starTotal = [];

        foreach ($stars as $item) {

            $starTotal[] = $item->stars;

        }

        if ($starTotal == null) {

            return Inertia::render('ShowBikePartPage', ['product' => $bike, 'reviews' => $reviews]);
        }
        $starsAvg = round(array_sum($starTotal) / $stars->count(), 1);

        $commentsCount = $stars->count();






        return Inertia::render('ShowBikePartPage', ['product' => $bike, 'reviews' => $reviews, 'starsAvg' => $starsAvg, 'commentsCount' => $commentsCount]);


    }
}
