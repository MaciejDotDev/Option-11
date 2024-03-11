<?php

namespace App\Http\Controllers;

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
