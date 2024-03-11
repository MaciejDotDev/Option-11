<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Accessory;
use App\Models\Products;
use App\Models\Categories;
use Illuminate\Support\Facades\Log;
class AccessoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

       $categories = Categories::where('name','accessory')->first(); // go optimmise later on to use hasmany or hasone in the model

        $accessories = Products::where('categoryid', $categories->categoryid)->get();

        $uniqueid = [];
        foreach ($accessories as $item) {

            $uniqueid[] = $item->productid;

        


        }
      
      
        Accessory::create([
            'productid' => $uniqueid[0],
            'category' => 'Helmet',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[1],
            'category' => 'Helmet',
            'size' => 'Large',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[2],
            'category' => 'Helmet',
            'size' => 'Small',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[3],
            'category' => 'Knee Pads',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[4],
            'category' => 'Knee Pads',
            'size' => 'Large',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[5],
            'category' => 'Knee Pads',
            'size' => 'Small',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[6],
            'category' => 'Gloves',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[7],
            'category' => 'Gloves',
            'size' => 'Large',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[8],
            'category' => 'Gloves',
            'size' => 'Small',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'productid' => $uniqueid[9],
            'category' => 'Water Bottle',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);


    }
}
