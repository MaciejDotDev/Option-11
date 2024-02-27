<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminAddProductsController extends Controller
{
    public function showAddProductsPage(Request $request)
    {
        return Inertia::render('AdminAddProducts');
    }
}
