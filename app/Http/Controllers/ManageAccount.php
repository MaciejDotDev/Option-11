<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Redirect;





class ManageAccount extends Controller
{

  

    public function create () {

        return Inertia::render('Dashboard');


    }
    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();
        $userID = $user->userid;

        
            $validateInput = $request->validate([
                'firstname' => 'required|string|max:255',
                'lastname' => 'required|string|max:255',
                'phonenumber' => 'required|string|max:12',
                'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
        
            ]);
        
        
        
           
        
           
        
                User::where('userid',$userID)->update([
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,
                    'phonenumber' => $request->phonenumber,
                    'email' => $request->email,
                    'password' => Hash::make($request->password)
        
        
        
                ]);
                // ManageAccount.php
                $success = "Account succesffuly updated!";
                return redirect('/dashboard')->with('success', $success);

        
        
        
    
        
        
    }

    public function destroy(Request $request): RedirectResponse
    {
        
        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

}
