<?php

namespace App\Http\Controllers;
<<<<<<< HEAD
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminReportsController extends Controller
{
    public function showAdminReportsPage(Request $request)
    {
        return Inertia::render('AdminReports');
    }
}
=======

use App\Exports\UsersExport;
use App\Exports\ProductsExporter;
use Maatwebsite\Excel\Facades\Excel;
use Inertia\Inertia;
class AdminReportsController extends Controller 
{   

    public function show () {
        return Inertia::render('AdminReports');

    }
    public function exportUsers() 
    {
        return new UsersExport();
    }

    public function exportProducts() 
    {
        return Excel::download(new ProductsExporter, 'users.xlsx');
    }
}
>>>>>>> dff58cfa8409bec97d6cb4bdbc29964178bb75db
