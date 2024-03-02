<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;

use App\Models\Orders;

use App\Models\Basket;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowOrdersController extends Controller{
    public function showAll()
    {
        $orders = Orders::orderBy("ordersid","desc")->paginate(10);
        $baskets = Basket::all();
        return Inertia::render('Order', ['baskets' => $baskets]);
    }
}

?>
