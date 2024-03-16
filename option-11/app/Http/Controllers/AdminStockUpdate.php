<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\Log;


class AdminStockUpdate extends Controller
{
    public function update(Request $request)
    {

        $selectedProductType = $request->input('productid');
        $quantity = $request->input('stockquantity');


        $validateInput = $request->validate([
            'productid' => 'required|numeric|not_in:0',
            'stockquantity' => 'required|numeric|not_in:0|gt:0',



        ]);
        if ( $validateInput) {
            $product = Products::where('productid', $selectedProductType)->first();
            if ($product) {
                $product->stockquantity += $quantity;
                $product->save();
                return $this->show($request);
            } else {
                return $this->show($request);
            }

        } else {

            return redirect()->back()->withErrors(['empty' => 'Invalid input!']);
        }

    }
    public function show(Request $request)
    {
        $products = Products::all();

        return Inertia::render('AdminStockUpdate', ['products' => $products]);
    }



}
