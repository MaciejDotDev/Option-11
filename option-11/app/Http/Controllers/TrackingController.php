<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Bikes;
use App\Models\BikePart;
use App\Models\Accessory;
use App\Models\RepairKit;
use Illuminate\Support\Facades\Redirect;
use App\Models\Clothes;
use App\Models\Basket;
use App\Models\Reviews;
use Inertia\Inertia;
use App\Models\Products;
use App\Models\Categories;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Http\Controllers\ShowBikesController;
use App\Http\Controllers\ShowBikePartsController;
use App\Http\Controllers\ShowRepairKitsController;
use App\Http\Controllers\ShowAccessoriesController;
use App\Http\Controllers\ShowClothingController;
class TrackingController extends Controller
{
    public function show($trackingid,$productid) {




            $orders = Orders::where('trackingcode', $trackingid)->first();

            $orderItem = OrderItem::with('products')->where('orderid', $orders->orderid)->where('productid', $productid)->first();




            return Inertia::render('OrderTrack',['orderItem' =>$orderItem, 'status' => $orders->status]);
        }

    public function viewProduct( $productid) {



        $bikes = Bikes::where('productid', $productid)->first();
        $clothes = Clothes::where('productid', $productid)->first();
        $bikepart = BikePart::where('productid', $productid)->first();
        $accessory = Accessory::where('productid', $productid)->first();
        $repairkit = RepairKit::where('productid', $productid)->first();

        if ($bikes) {


            $showBikesController = new ShowBikesController();
           return $showBikesController->showIndividual($productid);
        } else if ($clothes) {
            $showBikesController = new ShowClothingController();
            return $showBikesController->showIndividual($productid);

        } else if ($accessory) {

            $showBikesController = new ShowAccessoriesController();
            return  $showBikesController->showIndividual($productid);
        } else if ($bikepart) {

            $showBikesController = new ShowBikePartsController();
            return $showBikesController->showIndividual($productid);
        } else if ($repairkit) {

            $showBikesController = new ShowRepairKitsController();
            return $showBikesController->showIndividual($productid);
        } else {

                    return redirect()->back()->withErrors();
        }



    }




}
