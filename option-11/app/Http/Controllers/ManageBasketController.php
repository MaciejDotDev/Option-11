<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Basket;
use App\Models\Products;

use Inertia\Inertia;


use Illuminate\Support\Facades\Redirect;

class ManageBasketController extends Controller
{
    protected $bikes;
    protected $basket;


    public function getBasket()
    {

        $this->basket = Basket::with('products')->where('userid', auth()->user()->userid)->where('status', 'open')->get();
        $totalPrice = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->sum('totalprice');
        return Inertia::render('Basket', ['basket' =>  $this->basket, 'totalprice' => $totalPrice]);
    }




    public function addRemItem(Request $request)
    {

        //When adding or removing items need to change ht price


        switch ($request->action) {
            case "delete":
                $basket = Basket::where('basketid', $request->basketid)->first();
                $basket->delete();
                return Redirect::route('basket');
            case "add":

                $basket = Basket::where('basketid', $request->input('basketid'))->first();
                $bikes = Products::where('productid', $basket->productid)->first();
                if ($bikes->stockquantity - $basket->quantity <= 0) {
                    return redirect()->back()->withErrors(['stock' => 'Not enough stock!']);


                }

                $basket->quantity = $basket->quantity + 1;



                $basket->totalprice = $basket->quantity * $bikes->price;
                $basket->save();

                return Redirect::route('basket');
            case "remove":
                $basket = Basket::find($request->basketid);

                if ($basket->quantity <= 1) {








                    return $this->deleteProduct($request);
                } else {


                    $basket->quantity = $basket->quantity - 1;



                    $bike = Products::where('productid', $basket->productid)->first();
                    $basket->totalprice = $basket->quantity * $bike->price;


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

    public function addBasket(Request $request)
    {

        //to validate if item already exists inside the database, as well as a plus or minus button to increase quantity

        $validateInput = $request->validate([
            'quantity' => 'required|numeric|not_in:0|gt:0',



        ]);

        if ($validateInput) {





            $stockCheck = Products::find(request('product_hidden'));

            if ($stockCheck->stockquantity - request('quantity') >= 0) {

                $finditem = Basket::where('userid', auth()->user()->userid)->first();
                $basket = new Basket();

                $noRecords = false;

                $stopLoop = true;

                while ($stopLoop) {
                    if ($finditem == null || $noRecords) {


                        $basket = new Basket();
                        $basket->userid = auth()->user()->userid;
                        $basket->productid = request('product_hidden');
                        $basket->quantity = request('quantity');

                        $bike = Products::where('productid', $basket->productid)->first();
                        $basket->totalprice = $basket->quantity * $bike->price;


                        $basket->status = 'open';
                        $basket->save();

                        $stopLoop = false;
                        return redirect()->back()->with('success', "Item successfully added to basket!");

                    }

                    $record = Basket::where('userid', auth()->user()->userid)->where('productid', request('product_hidden'))->first();


                    if ($record) {
                        if ($stockCheck->stockquantity - $record->quantity - request('quantity') <= 0) {

                            return redirect()->back()->withErrors(['stock' => 'Not enough stock!']);
                        } else {

                            $record->quantity = request('quantity') + $record->quantity;
                            $bike = Products::where('productid', request('product_hidden'))->first();


                            $record->save();
                            $stopLoop = false;
                            return redirect()->back()->with('success', "Item successfully added to basket!");


                        }








                    } else {
                        $noRecords = true;

                    }

                }
            } else {

                return redirect()->back()->withErrors(['stock' => 'Not enough stock!']);

            }










        }

    }
}
