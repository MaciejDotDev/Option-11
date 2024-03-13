<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use App\Exports\ProductsExporter;
use App\Exports\UsersAllExport;
use Maatwebsite\Excel\Facades\Excel;
use Inertia\Inertia;
class AdminReportsController extends Controller
{

    public function show () {
        return Inertia::render('AdminReports');

    }
    public function exportUsersStats()
    {
        return new UsersStatsExport();
    }

    public function exportAllUsers() {

            return new UsersAllExport();
    }

    public function exportAccessory()
    {
        return new AccessoryExport();
    }

    public function exportProducts()
    {
        return Excel::download(new ProductsExporter, 'users.xlsx');
    }
}
