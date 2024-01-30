<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RepairKit;

class RepairKitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RepairKit::create([
            'productname' => 'Puncture Repair Kit',
            'description' => 'A puncture repair kit for fixing punctures.',
            'price' => 4.99,
            'stockquantity' => 10,
            'imageURL' => 'puncture_repair_kit.jpg',
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productname' => 'Bike Pump',
            'description' => 'A bike pump for pumping up tyres.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'bike_pump.jpg',
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productname' => 'Bike Multi-Tool',
            'description' => 'A bike multi-tool for fixing your bike.',
            'price' => 14.99,
            'stockquantity' => 10,
            'imageURL' => 'bike_multi_tool.jpg',
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productname' => 'Bike Chain',
            'description' => 'A bike chain for replacing your chain.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'bike_chain.jpg',
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productname' => 'Bike Reapair Kit medium',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 44.99,
            'stockquantity' => 10,
            'imageURL' => 'bikerepairkitB.jpg',
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productname' => 'Bike Reapair Kit large',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 59.99,
            'stockquantity' => 10,
            'imageURL' => 'bikerepairkitC.jpg',
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);

        RepairKit::create([
            'productname' => 'Bike Reapair Kit small',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'bikerepairkitA.jpg',
            'category' => 'Repair Kit',
            'CompatibleWithType' => 'All',
        ]);
    }
}
