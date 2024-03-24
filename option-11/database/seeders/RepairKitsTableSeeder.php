<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RepairKit;
use App\Models\BikePart;
use App\Models\Products;
use App\Models\Categories;
class RepairKitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Categories::where('name','repairkit')->first(); // go optimmise later on to use hasmany or hasone in the model

        $accessories = Products::where('categoryid', $categories->categoryid)->get();

        $uniqueid = [];
        foreach ($accessories as $item) {

            $uniqueid[] = $item->productid;




        }




        RepairKit::create([
            'productid' => $uniqueid[0],
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productid' => $uniqueid[1],
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productid' => $uniqueid[2],
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productid' => $uniqueid[3],
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productid' => $uniqueid[4],
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);








    }
}
