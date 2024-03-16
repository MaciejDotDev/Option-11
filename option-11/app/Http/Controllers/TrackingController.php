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
use App\Models\OrderItem;
use App\Models\Orders;
class TrackingController extends Controller
{
    public function show($trackingid) {




            $orders = Orders::where('trackingcode', $trackingid)->first();

            $orderItem = OrderItem::with('products')->where('orderid', $orders->orderid)->first();




            return Inertia::render('OrderTrack',['orderItem' =>$orderItem, 'status' => $orders->status]);
        }



}
