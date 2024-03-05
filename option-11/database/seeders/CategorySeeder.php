<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categories;
use App\Models\Products;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categories::create([
            'name' => 'bike',
         
        ]);

        Categories::create([
            'name' => 'accessory',
        ]);

        Categories::create([
            'name' => 'bikepart',
        ]);

        Categories::create([
            'name' => 'repairkit',
        ]);
        Categories::create([
            'name' => 'clothing',
        ]);

     
    }
}
