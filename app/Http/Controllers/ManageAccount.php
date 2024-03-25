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





        $wishlist = Wishlist::with('products')->where('userid', auth()->user()->userid)->get();


        $ordersItems = OrderItem::whereHas('orders', function ($query) {
            $query->where('userid', auth()->user()->userid);
        })->with('products', 'orders')->get();




        return Inertia::render('Dashboard', ['orderItems' => $ordersItems ?? [], 'wishlistItems' => $wishlist ?? []]);





























    }
    public function updateAccount(Request $request)
    {

        switch ($request->input('type')) {
            case 'firstname':

                $validateInput = $request->validate([
                    'detail' => 'required|string|max:255|regex:/^[a-zA-Z ]+$/',



                ]);
                if ($validateInput) {
                    User::where('userid', $request->user()->userid)->update([
                        'firstname' => $request->input('detail'),



                    ]);

                    return response()->json(['success' => "first name updated"]);


                } else {

                    return response()->json(['errors' => $validateInput->errors()]);
                }



            case 'lastname':

                $validateInput = $request->validate([
                    'detail' =>  'required|string|max:255|regex:/^[a-zA-Z ]+$/',



                ]);
                if ($validateInput) {
                    User::where('userid', $request->user()->userid)->update([
                        'lastname' => $request->input('detail'),



                    ]);

                    return response()->json(['success' => "Last name updated"]);


                } else {

                    return response()->json(['errors' => $validateInput->errors()]);
                }
            case 'email':

                $validateInput = $request->validate([
                    'detail' => 'required|string|lowercase|email|max:255',



                ]);
                if ($validateInput) {
                    User::where('userid', $request->user()->userid)->update([
                        'email' => $request->input('detail'),



                    ]);

                    return response()->json(['success' => "Email updated"]);


                } else {

                    return response()->json(['errors' => $validateInput->errors()]);
                }
            case 'phonenumber':

                $validateInput = $request->validate([
                    'detail' => 'required|string|min:10|max:12|regex:/[0-9]{9}/',



                ]);
                if ($validateInput) {
                    User::where('userid', $request->user()->userid)->update([
                        'phonenumber' => $request->input('detail'),



                    ]);

                    return response()->json(['success' => "Phone number name updated"]);


                } else {

                    return response()->json(['errors' => $validateInput->errors()]);
                }
            default:
                return response()->json(['error' => "Missing field"]);

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
