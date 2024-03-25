<?php

namespace App\Http\Controllers;

use App\Models\NotifiedOfStock;
use App\Models\Products;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
class CheckStock extends Controller
{
    public function checkStock(Request $request) {



            $userId = auth()->user()->userid; //  checks if bike is o

            $wishlist = Wishlist::where('userid', $userId)->get();

            $outOfStockProducts = [];

            foreach  ($wishlist as $item) {

                $notifiedStock = NotifiedOfStock::where('wishlistid', $item->wishlistid)->where('userid', $userId)->first();
                if (!$notifiedStock) { //  checks if notification exist it deletes every 5 days so if it deletes it will give again the notification

                    if ($item->products->stockquantity <= 5) {

                        $notifiedStockCreate = new NotifiedOfStock(); //  we createa new notificatin that deletes every 5 days to remind the user again with a new notification
                        $notifiedStockCreate->userid = $userId;
                        $notifiedStockCreate->wishlistid = $item->wishlistid;
                        $notifiedStockCreate->save();
                        $outOfStockProducts[] = "Quick! {$item->products->productname}, in your wishlist is nearly out of stock!";
                    }

                }
            }
            if (empty($outOfStockProducts)) {

                return redirect()->intended(RouteServiceProvider::HOME);
            } else {

                return response()->json($outOfStockProducts);
            }





    }}
