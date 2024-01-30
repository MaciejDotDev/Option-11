<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BikePart;
class ProductPartsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    

        BikePart::create([
            'productname' => 'Bike Chain',
            'description' => 'A durable chain for smooth cycling.',
            'price' => rand(15, 40),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_chain.jpg',
            'category' => 'Chain',
            'color' => 'Silver',
            'size' => 'Standard',
            'CompatibleWithType' => 'Road Bikes',
        ]);

        BikePart::create([
            'productname' => 'Bike Pedals',
            'description' => 'Quality pedals for a comfortable ride.',
            'price' => rand(20, 50),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_pedals.jpg',
            'category' => 'Pedals',
            'color' => 'Black',
            'size' => 'Standard',
            'CompatibleWithType' => 'Mountain Bikes',
        ]);

        BikePart::create([
            'productname' => 'Handlebar Grips',
            'description' => 'Comfortable grips for better control.',
            'price' => rand(10, 30),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'handlebar_grips.jpg',
            'category' => 'Grips',
            'color' => 'Red',
            'size' => 'Standard',
            'CompatibleWithType' => 'All Bikes',
        ]);

        BikePart::create([
            'productname' => 'Bike Saddle',
            'description' => 'An ergonomic saddle for a smooth ride.',
            'price' => rand(30, 70),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_saddle.jpg',
            'category' => 'Saddle',
            'color' => 'Brown',
            'size' => 'Standard',
            'CompatibleWithType' => 'Hybrid Bikes',
        ]);

        BikePart::create([
            'productname' => 'Bike Lights Set',
            'description' => 'A set of lights for safety during night rides.',
            'price' => rand(15, 40),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_lights.jpg',
            'category' => 'Lights',
            'color' => 'White',
            'size' => 'Standard',
            'CompatibleWithType' => 'All Bikes',
        ]);

    }
    
}
