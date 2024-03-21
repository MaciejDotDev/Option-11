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


        $notifications = Notification::orderBy('created_at', 'desc')->where('notification_type', '!=', 'log')->get();
                return response()->json($notifications);

    }


    public function logs() {


        $notifications = Notification::orderBy('created_at', 'desc')->where('notification_type', 'log')->get();
        return response()->json($notifications);

}
}
