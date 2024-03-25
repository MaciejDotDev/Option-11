<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use App\Models\Notification;
class AdminEditUsersController extends Controller
{
    public function show(Request $request)
    {
        $users = User::all();
        return Inertia::render('AdminEditUsers', ['users' => $users]);
    }

    public function updateShow(Request $request,$userid) {

        $user = User::where('userid', $userid)->first();


        return Inertia::render('AdminUpdateUserForm', ['user' => $user]);




    }

    public function update(Request $request) {

        $validateInput = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phonenumber' => 'required|string|min:10|max:12|regex:/[0-9]{9}/',
            'email' => 'required|string|lowercase|email|max:255',


        ]);



        if ($validateInput) {


            User::where('userid',$request->userid)->update([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'phonenumber' => $request->phonenumber,
                'email' => $request->email,




            ]);

            $user = User::where('userid',$request->userid)->first();

            $notification = new Notification();
            $notification->notification_type = "log";
            $notification->notification_title = "User has modified";
            $orderTime = \Carbon\Carbon::parse($user->created_at)->format('d/m/Y H:i:s');

            $userid = $user->userid;

            $notification->notification_description = "User $userid, at $orderTime has been modified";
            $notification->save();

        } else {

            return redirect()->back()->withErrors(['empty' => 'Invalid input!']);
        }








            return  Redirect::to('/adminUsers');
    }

    public function delete(Request $request,$userid) {



        $user = User::where('userid', $userid);




        $user->delete();
        $notification = new Notification();
        $notification->notification_type = "log";
        $notification->notification_title = "User has deleted";
        $orderTime = \Carbon\Carbon::parse($user->created_at)->format('d/m/Y H:i:s');

        $userid = $user->userid;

        $notification->notification_description = "User $userid, at $orderTime has been deleted";
        $notification->save();

        return  Redirect::to('/adminUsers');
    }


    public function viewUser(Request $request,$userid) {




        $user = User::where('userid', $userid)->first();



        return Inertia::render('AdminViewUser', ['users' => $user]);
    }

}
