<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class PartCheckController extends Controller
{



    public function check($id) {

        $comp = Products::find($id);

        //dd($comp->compatability()->get());
        $compatibleProducts = $comp->compatability()->get();
        return response()->json($compatibleProducts);
    }

    public function checkCompatibility($productId1, $productId2) {
        $product1 = Products::find($productId1);
        $product2 = Products::find($productId2);

        // Check if both products exist
        if (!$product1 || !$product2) {
            return response()->json(['error' => 'One or both products not found'], 404);
        }

        // Check if there is a compatibility relation between the two products
        $isCompatible = $product1->compatability->contains($product2->productid);

        return response()->json(['compatible' => $isCompatible]);
    }

}
