<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BikePart;
use App\Models\Products;
use App\Models\Bikes;
use App\Models\Categories;
class ProductPartsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = Categories::where('name','bikepart')->first(); // go optimmise later on to use hasmany or hasone in the model

        $accessories = Products::where('categoryid', $categories->categoryid)->get();

        $mountainBike = Bikes::where('category', "Mountain")->first();

        $uniqueid = [];
        foreach ($accessories as $item) {

            $uniqueid[] = $item->productid;

        }

        BikePart::create([
            'productid' => $uniqueid[0],
            'category' => 'Chain',
            'color' => 'Silver',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[1],
            'category' => 'Pedals',
            'color' => 'Black',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[2],
            'category' => 'Grips',
            'color' => 'Red',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[3],
            'category' => 'Saddle',
            'color' => 'Brown',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[4],

            'category' => 'Lights',
            'color' => 'White',
            'size' => 'Standard',

        ]);

    }


}
