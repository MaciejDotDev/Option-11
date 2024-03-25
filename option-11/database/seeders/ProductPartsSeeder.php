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



        $uniqueid = [];
        foreach ($accessories as $item) {

            $uniqueid[] = $item->productid;

        }



        BikePart::create([
            'productid' => $uniqueid[0],
            'category' => 'Chain',
            'colour' => 'Silver',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[1],
            'category' => 'Pedals',
            'colour' => 'Black',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[2],
            'category' => 'Grips',
            'colour' => 'Red',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[3],
            'category' => 'Saddle',
            'colour' => 'Brown',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[4],

            'category' => 'Lights',
            'colour' => 'White',
            'size' => 'Standard',

        ]);

        BikePart::create([
            'productid' => $uniqueid[5],

            'category' => 'Frame',
            'colour' => 'Black',
            'size' => 'Standard',

        ]);
        BikePart::create([
            'productid' => $uniqueid[6],

            'category' => 'Frame',
            'colour' => 'Black',
            'size' => 'Standard',

        ]);
        BikePart::create([
            'productid' => $uniqueid[7],

            'category' => 'Frame',
            'colour' => 'Black',
            'size' => 'Standard',

        ]);
        BikePart::create([
            'productid' => $uniqueid[8],

            'category' => 'Frame',
            'colour' => 'Black',
            'size' => 'Standard',

        ]);
        BikePart::create([
            'productid' => $uniqueid[9],

            'category' => 'Frame',
            'colour' => 'Black',
            'size' => 'Standard',

        ]);

    }


}
