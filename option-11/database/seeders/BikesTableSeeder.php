<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Bikes;

class BikesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Bikes::create([
            'productname' => 'Mountain Bike',
            'description' => 'A sturdy mountain bike for off-road adventures.',
            'price' => 499.99,
            'stockquantity' => 10,
            'imageURL' => 'mountain_bike.jpg',
            'category' => 'Mountain',
        ]);

        Bikes::create([
            'productname' => 'Road Bike',
            'description' => 'A lightweight road bike for speed.',
            'price' => 599.99,
            'stockquantity' => 10,
            'imageURL' => 'road_bike.jpg',
            'category' => 'Road',
        ]);

        Bikes::create([
            'productname' => 'Hybrid Bike',
            'description' => 'A hybrid bike for both on and off-road.',
            'price' => 399.99,
            'stockquantity' => 10,
            'imageURL' => 'hybrid_bike.jpg',
            'category' => 'Hybrid',
        ]);

        Bikes::create([
            'productname' => 'Electric Bike',
            'description' => 'An electric bike for those who want to go further.',
            'price' => 799.99,
            'stockquantity' => 10,
            'imageURL' => 'electric_bike.jpg',
            'category' => 'Electric',
        ]);

        Bikes::create([
            'productname' => 'Kids Bike',
            'description' => 'A kids bike for those who want to start young.',
            'price' => 199.99,
            'stockquantity' => 10,
            'imageURL' => 'kids_bike.jpg',
            'category' => 'Kids',
        ]);
    }
}
