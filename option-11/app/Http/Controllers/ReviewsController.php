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








public function showAll() {
    $reviews = Reviews::all();

    $stars = Reviews::where('productid',5)->get();


    $starTotal = [];

    foreach ($stars as $item) {

        $starTotal[] =  $item->stars;

    }
   
    $starsAvg  = round(array_sum($starTotal)/ $stars->count(),1);

    $commentsCount = $stars->count();

    return Inertia::render('Test',['reviews' => $reviews,'starsAvg' => $starsAvg,'commentsCount' => $commentsCount]);

 


  
}




public function createReview(Request $request) {
    
 

    $validateInput = $request->validate([
        'stars'=>'required|integer|between:1,5',
        'title'=>'required',
   
        'description'=>'required'




    ]);







if ($validateInput){

  

        $project = new Reviews();
        $project->userid =  auth()->user()->userid; 
        $project->title = $request->title;
        $project->description =$request->description;
        $project->stars =$request->stars;
        $project->productid = 5;
        $project->save();
        return redirect()->route('reviews');



  




   } else {


    return back()->withErrors($validateInput)->withInput();
   }



  
}
  

   


  




















}
