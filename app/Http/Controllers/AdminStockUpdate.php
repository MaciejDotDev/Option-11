<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\Log;
use App\Models\Notification;

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
                $notification = new Notification();
                $notification->notification_type = "log";
                $notification->notification_title = "Stock has been changhed!";
                $orderTime = \Carbon\Carbon::parse($product->created_at)->format('d/m/Y H:i:s');

                $productid = $product->productid;

                $notification->notification_description = "Product $productid stocck has been changed at $orderTime";
                $notification->save();
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
