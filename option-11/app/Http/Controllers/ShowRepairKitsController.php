<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\RepairKit;
use App\Models\Basket;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowRepairKitsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    //The show all function is used to display all the repair kits
    //it works by using Inertia render to get the jsx page and then passing the repair kit jsx object to the page as an array
    public function showAll()
    {
        $repairkits = RepairKit::all()->map(function ($repairkit) {
            return [
                'repairkitsid' => $repairkit->repairkitsid,
                'name' => $repairkit->name,
                'description' => $repairkit->description,
                'price' => $repairkit->price,
                'stockquantity' => $repairkit->stockquantity,
                'image' => $repairkit->image,
                'kit_url' => route('sendrepairkit', ['repairkitsid' => $repairkit->repairkitsid])
            ];
        });


        return Inertia::render('RepairKits', ['repairKit' => $repairkits]);
    }


    public function addBasket(Request $request)
    {

        $validateInput = $request->validate([
            'quantity' => 'numeric|required|not_in:0|max:10',



        ]);

        if ($validateInput) {


            $finditem =  Basket::where('userid', auth()->user()->userid)->first();
            $basket = new Basket();

            if ($finditem  ==  null) {


                $basket->userid =  auth()->user()->userid;
                $basket->repairkitsid = request('repairkitsid_hidden');
                $basket->quantity = request('quantity');

                $bike = RepairKit::where('repairkitsid', $basket->repairkitsid)->first();
                $basket->totalprice = $basket->quantity * $bike->price;

                /// needs to change this to only apply during transaction but check first if its in stock anyway


                $basket->status = 'open';
                $basket->save();

                return redirect()->back()->with('success', "Item successfully added to basket!");
            }


            $record = Basket::where('userid', auth()->user()->userid)->where('repairkitsid',  request('repairkitsid_hidden'))->first();


            if ($record) {

                $record->quantity = request('quantity') + $record->quantity;

                $record->save();

                return redirect()->back()->with('success', "Item successfully added to basket!");






            } else {



                $basket->userid =  auth()->user()->userid;
                $basket->repairkitsid = request('repairkitsid_hidden');
                $basket->quantity = request('quantity');

                $bike = RepairKit::where('repairkitsid', $basket->repairkitsid)->first();
                $basket->totalprice = $basket->quantity * $bike->price;
                $bike->stockquantity = $bike->stockquantity -  $basket->quantity;

                $basket->status = 'open';
                $basket->save();

                return redirect()->back()->with('success', "Item successfully added to basket!");
            }
        }
    }
}
