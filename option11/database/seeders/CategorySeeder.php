<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categories;
use App\Models\Products;
use Illuminate\Support\Facades\DB;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = ['bike','accessory','bikepart','repairkit','clothing'];

        foreach (range(0, 4) as $index) {
            DB::table('categories')->insert([
                'categoryid'=> $index+1,
                'name' => $categories[$index],
            ]);
        }


       
     
    }
}
