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
        //Bikes to Parts
        Products::find(1)->compatability()->attach(33);
        Products::find(2)->compatability()->attach(32);
        Products::find(3)->compatability()->attach(34);
        Products::find(4)->compatability()->attach(31);
        Products::find(5)->compatability()->attach(35);


        //Parts to Bikes
        Products::find(33)->compatability()->attach(1);
        Products::find(32)->compatability()->attach(2);
        Products::find(34)->compatability()->attach(3);
        Products::find(31)->compatability()->attach(4);
        Products::find(35)->compatability()->attach(5);

        //Bikes to Repair Kits
        Products::find(1)->compatability()->attach(16);
        Products::find(1)->compatability()->attach(17);
        Products::find(1)->compatability()->attach(18);

        Products::find(2)->compatability()->attach(16);
        Products::find(2)->compatability()->attach(17);
        Products::find(2)->compatability()->attach(18);

        Products::find(3)->compatability()->attach(16);
        Products::find(3)->compatability()->attach(17);
        Products::find(3)->compatability()->attach(18);

        Products::find(4)->compatability()->attach(16);
        Products::find(4)->compatability()->attach(17);
        Products::find(4)->compatability()->attach(18);


    }
}

