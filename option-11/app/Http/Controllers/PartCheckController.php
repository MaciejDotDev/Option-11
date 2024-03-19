<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PartCheckController extends Controller
{



    public function check() {

        $comp = $product->compatibility()->get()

         ///  add here the code to return to a specifics page  return Inertia::render('', ['comp' => $comp]);

    }
}
