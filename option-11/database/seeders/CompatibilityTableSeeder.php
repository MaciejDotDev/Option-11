<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;


class CompatibilityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Products::find(1)->compatability()->attach(33);
        Products::find(2)->compatability()->attach(32);
        Products::find(3)->compatability()->attach(34);
        Products::find(4)->compatability()->attach(31);
        Products::find(5)->compatability()->attach(35);

    }
}

