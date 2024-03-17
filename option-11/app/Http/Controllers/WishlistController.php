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


    public function add(Request $request)
    {
        $request->validate([

            'itemId' => 'required|integer',
        ]);






        $item = Products::find($request->itemId);
        if (!$item) {
            return redirect()->back()->with('success', 'Item not found');
        }

        // Create wishlist entry
        Wishlist::create([
            'userid' => auth()->user()->userid,
            'productid' => $request->itemId,
        ]);



        return redirect()->back()->with('wishlist', "Item successfully added to wishlist!");
    }


    public function remove(Request $request)
    {
        $validated = $request->validate([
            'itemId' => 'required|integer|exists:wishlist,id',
        ]);


        $item = Wishlist::find($validated['itemId']);
        if ($item) {
            $item->delete();
            return redirect()->back();
        }
    }
}
