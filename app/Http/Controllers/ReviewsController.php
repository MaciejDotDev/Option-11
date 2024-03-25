<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Bikes;
use Illuminate\Support\Facades\Redirect;
use App\Models\Clothes;
use App\Models\Basket;
use App\Models\Reviews;
use Inertia\Inertia;
use App\Models\Products;
use App\Models\Categories;

class ReviewsController extends Controller
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





     public function show() {


        return Inertia::render('OrderTrack');
    }


public function showAll($productid) {
    $reviews = Reviews::with('user')->orderBy('created_at', 'DESC')
    ->get();

    $stars = Reviews::where('productid',$productid)->get();


    $starTotal = [];

    foreach ($stars as $item) {

        $starTotal[] =  $item->stars;

    }
   if ($starTotal == null)
   {

    return Inertia::render('ReviewProducts',['reviews' => $reviews]);
   }
    $starsAvg  = round(array_sum($starTotal)/ $stars->count(),1);

    $commentsCount = $stars->count();




    return ['reviews' => $reviews,'starsAvg' => $starsAvg,'commentsCount' => $commentsCount];





}




public function createReview(Request $request) {



    $validateInput = $request->validate([
        'stars'=>'required|integer|between:1,5|gt:0',
        'title'=>'required',
        'productid' => 'required',
        'description'=>'required'




    ]);







if ($validateInput){



        $review = new Reviews();
        $review->userid =  auth()->user()->userid;
        $review->title = $request->title;
        $review->description =$request->description;
        $review->stars =$request->stars;
        $review->productid = $request->productid;
        $review->save();
        return redirect()->back();








   } else {


    return back()->withErrors($validateInput)->withInput();
   }




}


























}
