<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Bikes;
use App\Models\Products;
use App\Models\Categories;

class BikesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        $categories = Categories::where('name','bike')->first(); // go optimmise later on to use hasmany or hasone in the model

        $accessories = Products::where('categoryid', $categories->categoryid)->get();

        $uniqueid = [];
        foreach ($accessories as $item) {

            $uniqueid[] = $item->productid;




        }



        Bikes::create([
            'productid' => $uniqueid[0],
            'category' => 'Mountain',
            'colour' => 'red',
            'size' => 'red',
        ]);

        Bikes::create([
            'productid' => $uniqueid[1],
            'category' => 'Road',
            'colour' => 'red',
            'size' => 'red',
        ]);

        Bikes::create([
            'productid' => $uniqueid[2],
            'category' => 'Hybrid',
            'colour' => 'red',
            'size' => 'red',
        ]);

        Bikes::create([
            'productid' => $uniqueid[3],
            'category' => 'Electric',
            'colour' => 'red',
            'size' => 'red',
        ]);

        Bikes::create([
            'productid' => $uniqueid[4],
            'category' => 'Kids',
            'colour' => 'red',
            'size' => 'red',
        ]);

        Bikes::create([
            'productid' => $uniqueid[5],
            'category' => 'Mpuntain',
            'colour' => 'Black',
            'size' => 'Medium',
        ]);

        Bikes::create([
            'productid' => $uniqueid[6],
            'category' => 'Road',
            'colour' => 'White',
            'size' => 'Small',
        ]);

    }
}
