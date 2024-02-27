<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminReportsController extends Controller
{
    public function showAdminReportsPage(Request $request)
    {
        return Inertia::render('AdminReports');
    }
}
