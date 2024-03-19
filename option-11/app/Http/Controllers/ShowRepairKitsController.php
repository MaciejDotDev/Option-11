<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ManageBasketController;

use App\Models\Products;
use App\Models\Categories;
use App\Models\Basket;
use App\Models\RepairKit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShowRepairKitsController extends ManageBasketController
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

         RepairKit::with('products')->get();
        return Inertia::render('RepairKits'); // Corrected the key to 'repairKits'
    }

    public function search (){

        $bikes =  RepairKit::with('products')->get();
        return response()->json($bikes);
    }

    public function showIndividual($productid) {

        $repairkits =  RepairKit::with('products')->get();

    }


}
