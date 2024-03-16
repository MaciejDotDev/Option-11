<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UsersTableSeeder::class,
            BikesTableSeeder::class,
            AccessoryTableSeeder::class,
            ClothingSeeder::class,
            RepairKitsTableSeeder::class,
            ProductPartsSeeder::class,
            AdminsTableSeeder::class,
            UsersTableSeeder::class,
        ]);

    }
}
