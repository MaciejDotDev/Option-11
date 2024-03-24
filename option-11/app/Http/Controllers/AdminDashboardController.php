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

        try {
            $notifications = Notification::orderBy('created_at', 'desc')->where('notification_type', '!=', 'log')->get();
            return response()->json($notifications);

        } catch (\Exception $e) {

                return redirect()->back()->with('error', $e->getMessage());
        }


    }


    public function logs() {

        try  {

            $notifications = Notification::orderBy('created_at', 'desc')->where('notification_type', 'log')->get();
            return response()->json($notifications);

        } catch(\Exception $e) {

            return redirect()->back()->with('error', $e->getMessage());
        }


}
}
