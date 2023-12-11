<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   
        public function run(): void
    {
    DB::table('addresses') ->insert([
        'postcode' => 'B78',
            'country' => 'United kingdom',
            'city' => 'Birminham',
            'street' => 'Grat barr',
            'house_no' => '123',
            
            
    ]);
    DB::table('addresses') ->insert([
        'postcode' => 'M21',
            'country' => 'United kingdom',
            'city' => 'Manchester',
            'street' => 'Canal Street',
            'house_no' => '98',
            
    ]);
    DB::table('addresses') ->insert([
        'postcode' => 'M53',
            'country' => 'United kingdom',
            'city' => 'Manchester',
            'street' => 'Corporation',
            'house_no' => '111',
            
    ]);
    DB::table('addresses') ->insert([
        'postcode' => 'W12',
            'country' => 'United kingdom',
            'city' => 'Wales',
            'street' => 'High Street',
            'house_no' => '68',
            
    ]);
    DB::table('addresses') ->insert([
        'postcode' => 'M43',
            'country' => 'United kingdom',
            'city' => 'Manchester',
            'street' => 'church street',
            'house_no' => '55',
        
           
    ]);
    }
    }
