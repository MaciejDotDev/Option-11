<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Clothes;

class ClothingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Clothes::create([
            'productname' => 'Cycling Jersey',
            'description' => 'A comfortable jersey for your cycling adventures.',
            'price' => rand(50, 150),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'cycling_jersey.jpg',
            'category' => 'Jersey',
        ]);
        
        Clothes::create([
            'productname' => 'Biking Shorts',
            'description' => 'Durable shorts for a smooth ride.',
            'price' => rand(30, 80),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'biking_shorts.jpg',
            'category' => 'Shorts',
        ]);
        
        Clothes::create([
            'productname' => 'Cycling Jacket',
            'description' => 'A lightweight jacket for changing weather conditions.',
            'price' => rand(60, 120),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'cycling_jacket.jpg',
            'category' => 'Jacket',
        ]);
        
        Clothes::create([
            'productname' => 'Biking Tights',
            'description' => 'Tights for aero efficiency during rides.',
            'price' => rand(40, 100),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'biking_tights.jpg',
            'category' => 'Tights',
        ]);
        
       
        
    }
}
