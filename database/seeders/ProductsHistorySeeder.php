<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\ProductHistory;
use Carbon\Carbon;
use Faker\Factory as Faker;

class ProductsHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = ['bike', 'accessory', 'bikepart', 'repairkit', 'clothing'];

        // Define recurring product names
        $recurringProductNames = [
            'Helmet',
            'Knee Pads',
            'Gloves'
        ];

        // Define product names from other seeders
        $productNames = [
            'Mountain Bike',
            'Road Bike',
            'Hybrid Bike',
            'Electric Bike',
            'Kids Bike',
            'Helmet',
            'Knee Pads',
            'Gloves',
            'Water Bottle',
            'Puncture Repair Kit',
            'Bike Pump',
            'Bike Multi-Tool'
        ];


        $faker = Faker::create();
        $startDate = Carbon::now();
        $endDate = Carbon::now()->addDays(10);
        $dates = collect(Carbon::parse($startDate)->range($endDate))->shuffle();

        $productsHistory = [];

        foreach ($dates as $date) {

            $productName = $productNames[array_rand($productNames)];

            if (in_array($productName, $recurringProductNames)) {
                $productName = $recurringProductNames[array_rand($recurringProductNames)];
            }


            $category = $categories[array_rand($categories)];


            $productsHistory[] = [
                'productname' => $productName,
                'category' => $category,
                'quantity' => 2,
                'created_at' => $faker->dateTimeBetween('2023-01-01', '2024-12-31'),
                'updated_at' => $faker->dateTimeBetween('2023-01-01', '2024-12-31'),
            ];
        }


        DB::table('products_history')->insert($productsHistory);
    }
}
