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
        return Inertia::render('AccessoryProducts', ['accessories' => $accessories]);
    }





    public function showIndividual($productid) {

                $accessory =  Accessory::where('productid', $productid)->first();

                $product =  Products::where('productid', $$accessory->productid)->first();

        return Inertia::render('IndividualProductPage', ['accessory' => $accessory, 'product'  =>$product  ]);

    }











}
