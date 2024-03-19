<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PartCheckController extends Controller
{



    public function check($product) {

        $comp = $product->compatibility()->get();

        return response()->json($comp);


    }
}
