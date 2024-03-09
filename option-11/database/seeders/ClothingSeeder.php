<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Clothes;
use App\Models\Products;
use App\Models\Categories;
class ClothingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        

        $categories = Categories::where('name','clothing')->first(); // go optimmise later on to use hasmany or hasone in the model

        $accessories = Products::where('categoryid', $categories->categoryid)->get();

        $uniqueid = [];
        foreach ($accessories as $item) {

            $uniqueid[] = $item->productid;

        


        }



        
        
        Clothes::create([
            'productid' => $uniqueid[0],
            'category' => 'Jersey',
            'colour' => 'Blue',
            'size' => 'Jersey',

        ]);
        
        Clothes::create([
            'productid' => $uniqueid[1],
            'category' => 'Shorts',
            'colour' => 'Jersey',
            'size' => 'Jersey',
        ]);
        
        Clothes::create([
            'productid' => $uniqueid[2],
            'category' => 'Jacket',
            'colour' => 'Jersey',
            'size' => 'Jersey',
        ]);
        
        Clothes::create([
            'productid' => $uniqueid[3],
            'category' => 'Tights',
            'colour' => 'Jersey',
            'size' => 'Jersey',
        ]);
        
    }
}
