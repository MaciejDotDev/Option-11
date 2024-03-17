<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\OrderItem;
use App\Models\Orders;
use App\Models\Wishlist;
use App\Models\Products;
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




    public function create()
    {


        $order = Orders::where('userid', auth()->user()->userid)->get();
        $ordersItems = [];


        $wishlist = Wishlist::with('products')->where('userid', auth()->user()->userid)->get();



        $wishlistAmount = $wishlist->count();






        if ($order == null) {

            return Inertia::render('Dashboard', ['orderItems' => $ordersItems, 'wishlistItems' => $wishlist, 'wishlistAmount' => $wishlistAmount]);
        }

        foreach ($order as $item) {

            $ordersItems[] = OrderItem::with('products', 'orders')->where('orderid', $item->orderid)->first();
        }










        return Inertia::render('Dashboard', ['orderItems' => $ordersItems, 'wishlistItems' => $wishlist]);




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
            'firstname' => 'required|string|max:255|regex:/^[a-zA-Z ]+$/',
            'lastname' => 'required|string|max:255|regex:/^[a-zA-Z ]+$/',
            'phonenumber' => 'required|string|min:10|max:12|regex:/[0-9]{9}/',
            'email' => 'required|string|lowercase|email|max:255',


        ]);






        if ($validateInput) {

            User::where('userid', $userID)->update([
                'firstname' => $firstname,
                'lastname' => $lastname,
                'phonenumber' => $phonenumber,
                'email' => $email,




            ]);
            // ManageAccount.php
            return redirect('updateAccount');





        } else {

            return redirect()->back()->withErrors(['errors' => 'something has gone wrong']);

        }

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
