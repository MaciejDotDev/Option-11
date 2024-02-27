<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminStockUpdate extends Controller
{
    public function update(Request $request)
    {
        $selectedProductType = $request->input('productType');
        $quantity = $request->input('quantity');
        
        // Perform validation on $quantity if necessary
        
        // Perform stock update operations here
        // For example, update the stock quantity in the database
        // Assuming you have a Product model with a stock column
        $product = Product::where('type', $selectedProductType)->first();
        if ($product) {
            $product->stock += $quantity;
            $product->save();
            return response()->json(['message' => "Stock updated for $selectedProductType"]);
        } else {
            return response()->json(['error' => "Product not found"], 404);
        }
    }

}
