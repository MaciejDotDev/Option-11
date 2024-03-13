<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\OrderItem;
use App\Models\Orders;
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


        $order = Orders::where('userid',auth()->user()->userid)->first();

        if ($order == null) {

            return Inertia::render('Dashboard');
        }

        $ordersItems = OrderItem::where('orderid', $order->orderid)->get();


        
        return Inertia::render('Dashboard',['orderItems' => $ordersItems]);

        


    }
    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();
        $userID = $user->userid;
        $firstname = $request->firstname ?? auth()->user()->firstname; // this means if  $request->firstname is null then use whatver is after ?? if not use it directly
        $lastname = $request->lastname ?? auth()->user()->lastname;
        $phonenumber = $request->phonenumber ?? auth()->user()->phonenumber;
        $email = $request->email ?? auth()->user()->email;






            $validateInput = $request->validate([
                'firstname' => 'required|string|max:255',
                'lastname' => 'required|string|max:255',
                'phonenumber' => 'required|string|min:10|max:12|regex:/[0-9]{9}/',
                'email' => 'required|string|lowercase|email|max:255',


            ]);







                User::where('userid',$userID)->update([
                    'firstname' => $firstname,
                    'lastname' => $lastname,
                    'phonenumber' => $phonenumber,
                    'email' => $email,




                ]);
                // ManageAccount.php
                return redirect()->back();







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
