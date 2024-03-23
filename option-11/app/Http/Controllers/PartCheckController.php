<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class PartCheckController extends Controller
{



    public function check($id) {

        $comp = Products::find($id);

        //dd($comp->compatability()->get());
        $compatibleProducts = $comp->compatability()->get();
        return response()->json($compatibleProducts);
    }
}
