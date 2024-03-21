<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Repair;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowRepairBookingController extends Controller{

    public function showAll()
    {
        $repairs = Repair::all();
        return Inertia::render('RepairBooking', ['repairs' => $repairs]);
    }
}

?>
