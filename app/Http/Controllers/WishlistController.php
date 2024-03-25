<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Wishlist;
use App\Models\User; // Add User model import
use App\Models\Bikes;
use App\Models\Accessory;
use App\Models\Clothes;
use App\Models\BikePart;
use App\Models\RepairKit;
use App\Jobs\CheckLowStock;
use Inertia\Inertia;
use App\Models\Products;
use Illuminate\Support\Facades\Log;


class WishlistController extends Controller
{


    public function add(Request $request, $productid)
    {







        $checkWish = Wishlist::where('productid', $productid)->where('userid', auth()->user()->userid)->first();
        if ($checkWish) {


            return redirect()->back()->with('error', "Item is already in the wishlist!");
        }
        $item = Products::where("productid", $productid)->first();
        if (!$item) {

            return redirect()->back()->with('error', "Item not found!");
        }


        Wishlist::create([
            'userid' => auth()->user()->userid,
            'productid' => $productid,
        ]);



        return redirect()->back()->with('wishlist', "Item successfully added to wishlist!");
    }


    public function remove(Request $request)
    {
        $validated = $request->validate([
            'itemId' => 'required',
        ]);

        if ($validated) {
            $item = Wishlist::find($request->itemId);

            $item->delete();


            return redirect()->route('dashboard');

        } else {


            return redirect()->back()->withErrors('erros', "Something went wrong!");
        }


    }
}
