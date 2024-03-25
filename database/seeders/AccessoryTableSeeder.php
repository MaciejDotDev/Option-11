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
            'category' => 'Knee Pads',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);

        Accessory::create([
            'productid' => $uniqueid[2],
            'category' => 'Gloves',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);


        Accessory::create([
            'productid' => $uniqueid[3],
            'category' => 'Water bottle',
            'size' => 'Medium',
            'colour' => 'Vanilla white',
        ]);

        Accessory::create([
            'productid' => $uniqueid[4],
            'category' => 'Helmet',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);

        Accessory::create([
            'productid' => $uniqueid[5],
            'category' => 'Knee Pads',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);



    }
}
