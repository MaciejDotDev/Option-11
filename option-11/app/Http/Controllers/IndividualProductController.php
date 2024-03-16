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
        if ($category == 'bike') {
            $bike = Bikes::findOrFail($id);
            return Inertia::render('IndividualProductPage', ['product' => $bike]);
        } else if ($category == 'repairkit') {
            $repairKit = RepairKit::findOrFail($id);
            return Inertia::render('IndividualProductPage', ['product' => $repairKit]);
        } else if ($category == 'bikepart') {
            $bikePart = BikePart::findOrFail($id);
            return Inertia::render('IndividualProductPage', ['product' => $bikePart]);
        }
        else if ($category == 'clothing') {
            $clothing = Clothes::findOrFail($id);
            return Inertia::render('IndividualProductPage', ['product' => $clothing]);
        }
        else if ($category == 'accessory') {
            $accessory = Accessory::findOrFail($id);
            return Inertia::render('IndividualProductPage', ['product' => $accessory]);
        }
        else {
            return Inertia::render('404');
        }
    }


    public function showBike($id)
    {
        $bike = Bikes::findOrFail($id);

        return Inertia::render('IndividualProductPage', ['product' => $bike]);
    }

    public function showRepairKit($id)
    {
        $repairKit = RepairKit::findOrFail($id);

        return Inertia::render('IndividualProductPage', ['product' => $repairKit]);
    }

    public function showBikePart($id)
    {
        $bikePart = BikePart::findOrFail($id);

        return Inertia::render('IndividualProductPage', ['product' => $bikePart]);
    }

    public function showClothing($id)
    {
        $clothing = Clothes::findOrFail($id);

        return Inertia::render('IndividualProductPage', ['product' => $clothing]);
    }

    public function showAccessory($id)
    {
        $accessory = Accessory::findOrFail($id);

        return Inertia::render('IndividualProductPage', ['product' => $accessory]);
    }

}



