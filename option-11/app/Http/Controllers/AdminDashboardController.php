<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Notification;
class AdminDashboardController extends Controller
{
    public function dashboard(Request $request)
    {



        return Inertia::render('AdminDashboard');

    }


    public function notifications() {


                $notifications = Notification::orderBy('created_at', 'desc')->get();
                return response()->json($notifications);

    }
}
