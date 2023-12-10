<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clothing;
class ClothingController extends Controller
{
    public function index() {
        $clothings = Clothing::all();
        return view('clothing.index',compact('clothings'));
    }

   public function addToBasket(Request $request) {
    $itemId = $request->input('item_id');
    $basket = session() ->get('basket', []);
    $basket[$itemId] = isset($basket[$itemId]) ? $basket[$itemId] + 1 : 1;
    session()->put('basket', $basket);

    return redirect() ->back();
   }
}
