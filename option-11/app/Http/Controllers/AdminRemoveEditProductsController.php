<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminRemoveEditProductsController extends Controller
{
    public function showRemoveEditProductsPage(Request $request)
    {
        return Inertia::render('AdminRemoveEditProducts');
    }
}
