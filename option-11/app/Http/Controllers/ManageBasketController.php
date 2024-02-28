<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use App\Models\Basket;
use App\Models\Bikes;
use App\Models\BikePart;
use App\Models\Clothes;
use App\Models\RepairKit;
use App\Models\Accessory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Redirect;

class ManageBasketController extends Controller
{
    //

    public function search()
    {
        $basket = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->get();

        $totalPrice = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->sum('totalprice');

        $bikes = [];
        foreach ($basket as $item) {

            $bike = Bikes::where('bikeid', $item->bikeid)->first();
            $bikePart = BikePart::where('bikepartsid', $item->bikepartsid)->first();
            $clothes = Clothes::where('clothingid', $item->clothingid)->first();
            $repairkits = RepairKit::where('repairkitsid', $item->repairkitsid)->first();
            $accessory = Accessory::where('accessoryid', $item->accessoryid)->first();
            if ($bike) {


                $bikes[] = $bike;
            } else if ($bikePart) {

                $bikes[] = $bikePart;
            } else if ($clothes) {


                $bikes[] = $clothes;
            } else if ($repairkits) {


                $bikes[] = $repairkits;
            } else if ($accessory) {


                $bikes[] = $accessory;
            }
        }


        return Inertia::render('Basket', ['basket' => $basket, 'totalprice' => $totalPrice, 'bikes' => $bikes]);
    }


    public function addRemItem(Request $request)
    {

//When adding or removing items need to change ht price
        if ($request->action == "add") {


            $basket = Basket::where('basketid', $request->basketid)->first();

            
            $basket->totalprice = $basket->totalprice + $request->totalprice;
            $basket->quantity =  $basket->quantity + 1;

            


            $basket->save();

            return redirect()->back();
        } else if ($request->action == "remove") {

            $basket = Basket::where('basketid', $request->basketid)->first();

            if ($basket->quantity <= 1) {

            

                $basket->delete();
                return redirect('basket');
            } else {

                $basket->totalprice = $basket->totalprice - $request->totalprice;
                $basket->quantity =  $basket->quantity - 1;


                $basket->save();
                return redirect('basket');
            }
        }
    }

    public function deleteProduct(Request $request)
    {


        $basket = Basket::where('userid', auth()->user()->userid)->get();
        $basketid = $request->input('basketid');

        $basketFind = Basket::where('basketid', $basketid);

        $basketFind->delete();
        return redirect('basket');
    }
}
