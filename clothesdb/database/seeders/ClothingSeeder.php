<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Clothing;

class ClothingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
            DB::table('clothings')->insert([
                'image_URL'=> 't-shirt.jpg',
                'name' => 'T-shirt',
                'description' => 'A comfortable cotton T-shirt',
                'price' => 19.99,
                'stockavailabilty' => 80,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
    
            DB::table('clothings')->insert([
                'image_URL'=> 'cycling_jersey.jpg',
                'name' => 'Cycling Jersey',
                'description' => 'A breathable and moisture-wicking cycling jersey.',
                'price' => 49.99,
                'stockavailabilty' => 100,
                'created_at' => now(),
                'updated_at'=> now(),
             ]);
          
            DB::table('clothings')->insert([
                'image_URL'=> 'cycling_socks.jpg',
                'name' => 'Cycling socks',
                'description' => 'Moisture-wicking and free cycling socks for added comfotability',
                'price' => 19.99,
                'stockavailabilty' => 100,
                'created_at' => now(),
                'updated_at'=> now(),
             ]);
          
             DB::table('clothings')->insert([
                'image_URL'=> 'cycling shorts.jpg',
                'name' => 'Cycling shorts',
                'description' => 'Padded biking shorts  for advanced comfort on distance rides.',
                'price' => 39.99,
                'stockavailabilty' => 100,
                'created_at' => now(),
                'updated_at'=> now(),
             ]);
          

            DB::table('clothings')->insert([   
                'image_URL'=> 'cycling_jacket.jpg',
                'name' => 'Cycling Jacket',
                'description' => ' For all-weather riding a lightweight and windproof cycling jacket',
                'price' => 79.99,
                'stockavailabilty' => 100,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
    
         
            
    }
}
