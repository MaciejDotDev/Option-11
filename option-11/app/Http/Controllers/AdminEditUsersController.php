<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
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







            User::where('userid',$request->userid)->update([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'phonenumber' => $request->phonenumber,
                'email' => $request->email,




            ]);
            return  Redirect::to('/adminUsers');
    }

    public function delete(Request $request,$userid) {



        $user = User::where('userid', $userid);

        $user->delete();

        return  Redirect::to('/adminUsers');
    }


    public function viewUser(Request $request,$userid) {




        $user = User::where('userid', $userid)->first();



        return Inertia::render('AdminViewUser', ['users' => $user]);
    }

}
