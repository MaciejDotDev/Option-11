<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Accessory;

class AccessoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Accessory::create([
            'name' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'helmet.jpg',
            'category' => 'Helmet',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'helmet.jpg',
            'category' => 'Helmet',
            'size' => 'Large',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'helmet.jpg',
            'category' => 'Helmet',
            'size' => 'Small',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'knee_pads.jpg',
            'category' => 'Knee Pads',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'knee_pads.jpg',
            'category' => 'Knee Pads',
            'size' => 'Large',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'knee_pads.jpg',
            'category' => 'Knee Pads',
            'size' => 'Small',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'gloves.jpg',
            'category' => 'Gloves',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'gloves.jpg',
            'category' => 'Gloves',
            'size' => 'Large',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'gloves.jpg',
            'category' => 'Gloves',
            'size' => 'Small',
            'colour' => 'Black',
        ]);
        Accessory::create([
            'name' => 'Water Bottle',
            'description' => 'A water bottle to keep you hydrated.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'water_bottle.jpg',
            'category' => 'Water Bottle',
            'size' => 'Medium',
            'colour' => 'Black',
        ]);
    }
}
