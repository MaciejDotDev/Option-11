<?php

namespace App\Http\Controllers;

use App\Models\Bikes;
use App\Models\RepairKit;
use App\Models\BikePart;
use App\Models\Clothes;
use App\Models\Accessory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndividualProductController extends Controller
{
    public function product($category, $id)
    {
        $product = null;

        switch ($category) {
            case 'bike':
                $product = Bikes::findOrFail($id);
                break;
            case 'repairkit':
                $product = RepairKit::findOrFail($id);
                break;
            case 'bikepart':
                $product = BikePart::findOrFail($id);
                break;
            case 'clothing':
                $product = Clothes::findOrFail($id);
                break;
            case 'accessory':
                $product = Accessory::findOrFail($id);
                break;
            default:
                abort(404);
        }

        return Inertia::render('IndividualProductPage', ['product' => $product]);
    }
}



