<?php

namespace App\Http\Controllers;

use App\Models\Bikes;
use App\Models\RepairKit;
use App\Models\BikePart;
use App\Models\Clothes;
use App\Models\Accessory;
use Illuminate\Http\Request;
use Inertia\Inertia;


class IndividualProductController extends Controller
{
    public function product($id)
    {

        $product = Accessories::find($id);




        return Inertia::render('IndividualProductPage', ['product' => $product]);
    }



}


