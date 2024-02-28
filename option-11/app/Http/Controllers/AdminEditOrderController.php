<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminEditOrderController extends Controller
{
    public function showAdminEditOrderPage(Request $request)
    {
        return Inertia::render('AdminEditOrder');
    }
}
