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
    protected $bikes;
    protected  $basket;


    public function search()
    {
        $this->basket = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->get();


        $this->bikes = [];
        foreach ($this->basket as $item) {

            $bike = Bikes::where('bikeid', $item->bikeid)->first();
            $bikePart = BikePart::where('bikepartsid', $item->bikepartsid)->first();
            $clothes = Clothes::where('clothingid', $item->clothingid)->first();
            $repairkits = RepairKit::where('repairkitsid', $item->repairkitsid)->first();
            $accessory = Accessory::where('accessoryid', $item->accessoryid)->first();
            if ($bike) {


                $this->bikes[] = $bike;
            } else if ($bikePart) {

                $this->bikes[] = $bikePart;
            } else if ($clothes) {


                $this->bikes[] = $clothes;
            } else if ($repairkits) {


                $this->bikes[] = $repairkits;
            } else if ($accessory) {


                $this->bikes[] = $accessory;
            }
        }

        $totalPrice = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->sum('totalprice');


        return Inertia::render('Basket', ['basket' => $this->basket, 'totalprice' => $totalPrice, 'bikes' => $this->bikes]);
    }


    public function update($basket)
    {

        $basket1 = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->get();





        foreach ($basket1 as $item) {

            $bikes = Bikes::where('bikeid', $item->bikeid)->first();
            $bikePart = BikePart::where('bikepartsid', $item->bikepartsid)->first();
            $clothes = Clothes::where('clothingid', $item->clothingid)->first();
            $repairkits = RepairKit::where('repairkitsid', $item->repairkitsid)->first();
            $accessory = Accessory::where('accessoryid', $item->accessoryid)->first();

            if ($bikes) {


                $basket->totalprice = $basket->quantity * $bikes->price;
            } else if ($bikePart) {

                $basket->totalprice = $basket->quantity * $bikePart->price;
            } else if ($clothes) {

                $basket->totalprice = $basket->quantity * $clothes->price;
            } else if ($repairkits) {


                $basket->totalprice = $basket->quantity * $repairkits->price;
            } else if ($accessory) {


                $basket->totalprice = $basket->quantity * $repairkits->accessory;
            }
        }
    }

    public function addRemItem(Request $request)
    {

        //When adding or removing items need to change ht price

        if ($request->action == "delete") {

            $basket = Basket::where('basketid', $request->basketid)->first();


            $basket->delete();

            

            return Redirect::route('basket');

        } else if ($request->action == "add") {


            $basket = Basket::where('basketid', $request->input('basketid'))->first();



            $basket->quantity =  $basket->quantity + 1;

            $this->update($basket);
            $basket->save();

            return Redirect::route('basket');
        } else if ($request->action == "remove") {

            $basket = Basket::find($request->basketid);

            if ($basket->quantity <= 1) {








                return    $this->deleteProduct($request);
            } else {


                $basket->quantity =  $basket->quantity - 1;

                $this->update($basket);


                $basket->save();
                return Redirect::route('basket');
            }
        }
    }

    public function deleteProduct(Request $request)
    {


        $basket = Basket::where('userid', auth()->user()->userid)->get();
        $basketid = $request->basketid;

        $basketFind = Basket::where('basketid', $basketid);

        $basketFind->delete();
        return $this->search();
    }
}
