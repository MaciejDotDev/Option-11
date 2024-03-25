<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Bikes;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowRepairBookingController extends Controller{

    public function showAll()
    {
        $bikes = Bikes::with('products')->get();
        return Inertia::render('RepairBooking', ['bikes' => $bikes]);
    }


}

?>
