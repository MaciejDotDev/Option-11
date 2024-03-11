<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use App\Models\Basket;
use App\Models\Products;
use App\Models\Categories;
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


            $this->bikes[] = Products::where('productid', $item->productid)->first();
        }

        $totalPrice = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->sum('totalprice');


        return Inertia::render('Basket', ['basket' => $this->basket, 'totalprice' => $totalPrice, 'bikes' => $this->bikes]);
    }


    public function update($basket)
    {

        $basket1 = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->get();





        foreach ($basket1 as $item) {

         $bikes = Products::where('productid', $item->productid)->first();



                $basket->totalprice = $basket->quantity * $bikes->price;


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
            $bikes = Products::where('productid', $basket->productid)->first();
            if ($bikes->stockquantity - $basket->quantity <= 0 ) {
                return Redirect::route('basket');


            }

            $basket->quantity =  $basket->quantity + 1;


  $basket->totalprice  = $basket->totalprice + $bikes->price;
            $basket->save();

            return Redirect::route('basket');
        } else if ($request->action == "remove") {

            $basket = Basket::find($request->basketid);

            if ($basket->quantity <= 1) {








                return $this->deleteProduct($request);
            } else {


                $basket->quantity =  $basket->quantity - 1;

                $bikes = Products::where('productid', $basket->productid)->first();

                $basket->totalprice  = $basket->totalprice - $bikes->price;


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
        return Redirect::route('basket');
    }
}
