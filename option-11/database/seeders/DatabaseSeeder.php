<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
    $this->call([
    CategorySeeder::class,
    ProductsSeeder::class,
    AdminsTableSeeder::class,
    ProductPartsSeeder::class,
    RepairKitsTableSeeder::class,
    AccessoryTableSeeder::class,
    BikesTableSeeder::class,
    ClothingSeeder::class,
    UsersTableSeeder::class,
    ProductsHistorySeeder::class,

    // make sure the order on top remains
    ReviewsTableSeeder::class,
    ]);
    }
}
