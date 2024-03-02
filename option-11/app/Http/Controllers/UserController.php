<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller 
{
    public function export() 
    {
        return new UsersExport();
    }
}