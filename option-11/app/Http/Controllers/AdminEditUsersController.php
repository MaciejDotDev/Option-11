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

    public function delete(Request $request,$userid) {

        

        $user = User::where('userid', $userid);
    
        $user->delete();

        return  Redirect::to('/adminEditUsers');
    }

    
}
