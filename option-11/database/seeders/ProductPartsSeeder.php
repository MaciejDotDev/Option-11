<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BikePart;
use App\Models\Products;
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
            'color' => 'Silver',
            'size' => 'Standard',
            'CompatibleWithType' => 'Road Bikes',
        ]);

        BikePart::create([
            'productid' => $uniqueid[1],
            'category' => 'Pedals',
            'color' => 'Black',
            'size' => 'Standard',
            'CompatibleWithType' => 'Mountain Bikes',
        ]);

        BikePart::create([
            'productid' => $uniqueid[2],
            'category' => 'Grips',
            'color' => 'Red',
            'size' => 'Standard',
            'CompatibleWithType' => 'All Bikes',
        ]);

        BikePart::create([
            'productid' => $uniqueid[3],
            'category' => 'Saddle',
            'color' => 'Brown',
            'size' => 'Standard',
            'CompatibleWithType' => 'Hybrid Bikes',
        ]);

        BikePart::create([
            'productid' => $uniqueid[4],
          
            'category' => 'Lights',
            'color' => 'White',
            'size' => 'Standard',
            'CompatibleWithType' => 'All Bikes',
        ]);

    }
    
}
