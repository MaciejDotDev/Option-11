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
use Illuminate\Support\Facades\Log;


class WishlistController extends Controller
{
    public function index()
    {

        $wishlist = Wishlist::where('userid',  auth()->user()->userid)->get();

        $wishlistItems = [];
        // to optimise this
        foreach ($wishlist as $item) {

            $bike = Products::where('productid', $item->productid)->first();




        }

        return Inertia::render('Wishlist', ['wishlistItems' => $wishlistItems]);
    }

    public function add(Request $request)
    {
        $request->validate([
            'type' => 'required|string|in:bike,accessory,clothing,bikePart,repairKit',
            'itemId' => 'required|integer',
        ]);

        $userId = Auth::id();
        $type = $request->type;
        $itemId = $request->itemId;


        switch ($type) {
            case 'bike':
                $model = Bikes::class;
                break;
            case 'accessory':
                $model = Accessory::class;
                break;
            case 'clothing':
                $model = Clothes::class;
                break;
            case 'bikePart':
                $model = BikePart::class;
                break;
            case 'repairKit':
                $model = RepairKit::class;
                break;
        }


        $item = $model::find($itemId);
        if (!$item) {
            return redirect()->back()->with('error', 'Item not found');
        }

        // Create wishlist entry
        Wishlist::create([
            'userid' => $userId,
            $type . 'id' => $itemId,
        ]);

        CheckLowStock::dispatch($userId, $itemId, $type);

        return redirect()->back()->with('success', 'Item added to wishlist');
    }


    public function remove(Request $request)
    {
        $validated = $request->validate([
            'itemId' => 'required|integer|exists:wishlist,id',
        ]);


        $item = Wishlist::find($validated['itemId']);
        if ($item) {
            $item->delete();
            return response()->json(['message' => 'Item removed successfully'], 200);
        } else {
            return response()->json(['error' => 'Item not found'], 404);
        }
    }
}
