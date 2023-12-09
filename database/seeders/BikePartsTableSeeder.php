<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

//we need to use the BikeParts model to be able to create new instances of it in the database
use App\Models\BikePart;

class BikePartsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BikePart::create([
            'productname' => 'Mountain Frame',
            'description' => 'A sturdy mountain bike frame for off-road adventures.',
            'price' => 199.99,
            'stockquantity' => 10,
            'imageURL' => 'mountain_frame.jpg',
            'category' => 'Mountain',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Mountain',
        ]);
        BikePart::create([
            'productname' => 'Mountain Wheels',
            'description' => 'Sturdy mountain bike wheels for off-road adventures.',
            'price' => 99.99,
            'stockquantity' => 10,
            'imageURL' => 'mountain_wheels.jpg',
            'category' => 'Mountain',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Mountain',
        ]);
        BikePart::create([
            'productname' => 'Mountain Brakes',
            'description' => 'Sturdy mountain bike Brakes for off-road adventures.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'mountain_brakes.jpg',
            'category' => 'Mountain',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Mountain',
        ]);

        BikePart::create([
            'productname' => 'Road Frame',
            'description' => 'A lightweight road bike frame for speed.',
            'price' => 299.99,
            'stockquantity' => 10,
            'imageURL' => 'road_frame.jpg',
            'category' => 'Road',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Road',
        ]);

        BikePart::create([
            'productname' => 'Road Wheels',
            'description' => 'Lightweight road bike wheels for speed.',
            'price' => 199.99,
            'stockquantity' => 10,
            'imageURL' => 'road_wheels.jpg',
            'category' => 'Road',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Road',
        ]);

        BikePart::create([
            'productname' => 'Road Brakes',
            'description' => 'Lightweight road bike brakes for speed.',
            'price' => 99.99,
            'stockquantity' => 10,
            'imageURL' => 'road_brakes.jpg',
            'category' => 'Road',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Road',
        ]);

        BikePart::create([
            'productname' => 'Hybrid Frame',
            'description' => 'A hybrid bike frame for both on and off-road.',
            'price' => 149.99,
            'stockquantity' => 10,
            'imageURL' => 'hybrid_frame.jpg',
            'category' => 'Hybrid',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Hybrid',
        ]);

        BikePart::create([
            'productname' => 'Hybrid Wheels',
            'description' => 'Hybrid bike wheels for both on and off-road.',
            'price' => 99.99,
            'stockquantity' => 10,
            'imageURL' => 'hybrid_wheels.jpg',
            'category' => 'Hybrid',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Hybrid',
        ]);

        BikePart::create([
            'productname' => 'Hybrid Brakes',
            'description' => 'Hybrid bike brakes for both on and off-road.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'hybrid_brakes.jpg',
            'category' => 'Hybrid',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Hybrid',
        ]);

        BikePart::create([
            'productname' => 'Electric Frame',
            'description' => 'An electric bike frame for those who want to go further.',
            'price' => 399.99,
            'stockquantity' => 10,
            'imageURL' => 'electric_frame.jpg',
            'category' => 'Electric',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Electric',
        ]);

        BikePart::create([
            'productname' => 'Electric Wheels',
            'description' => 'Electric bike wheels for those who want to go further.',
            'price' => 299.99,
            'stockquantity' => 10,
            'imageURL' => 'electric_wheels.jpg',
            'category' => 'Electric',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Electric',
        ]);

        BikePart::create([
            'productname' => 'Electric Brakes',
            'description' => 'Electric bike brakes for those who want to go further.',
            'price' => 149.99,
            'stockquantity' => 10,
            'imageURL' => 'electric_brakes.jpg',
            'category' => 'Electric',
            'color' => 'Black',
            'size' => 'Medium',
            'CompatibleWithType' => 'Electric',
        ]);
    }
}
