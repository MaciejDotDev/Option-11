<?php

namespace App\Http\Controllers;

use App\Exports\UsersStatsExport;
use App\Exports\ProductsExporter;
use App\Exports\ProductsStatsExport;
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

    public function exportStatsProducts()
    {
        $export = new ProductsStatsExport();

        // Use the Excel facade to download the export
        return Excel::download($export, 'productsStats.xlsx');
    }

}
