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
        
        
        $product = Products::where('productid', $selectedProductType)->first();
        if ($product) {
            $product->stockquantity += $quantity;
            $product->save();
            return Inertia::render('AdminStockUpdate'); 
        } else {
            return Inertia::render('AdminStockUpdate');
        }
    }
    public function show(Request $request)
{
    $products = Products::all();

    return Inertia::render('AdminStockUpdate', ['products' => $products]);
}

    

}
