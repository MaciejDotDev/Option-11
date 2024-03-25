<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Bikes;
use App\Models\BikePart;
use App\Models\Categories;
use App\Models\Products;
use App\Models\ProductPartsCheck;

class ProductsPartsCheck extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Categories::where('name','bikepart')->first(); // go optimmise later on to use hasmany or hasone in the model

        $accessories = Products::where('categoryid', $categories->categoryid)->get();

        $bike = Bikes::all();

        $uniquePartId = [];

        $parts = BikePart::all();
        foreach ($parts as $item) {

            $uniqueid[] = $item->productid;




        }
$bikes = [];
        foreach ($bike as $item) {

            $bikes[] = $item->productid;




        }



        $bikePart = BikePart::all()->count();

        for ($i=0; $i < $bikePart ; $i++) {

            ProductPartsCheck::create([
                'bikeid' => 1,
                'bikepartsid' => $bikes[$i],


            ]);
        }




    }
}
