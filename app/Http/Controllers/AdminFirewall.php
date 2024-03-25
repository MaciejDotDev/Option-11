<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminFirewall extends Controller
{
    public function show() {


       return Inertia::render(  "", []);
    }

    public function blacklist(Request $request) {

      }

      public function whitelist(Request $request) {

      }


}
