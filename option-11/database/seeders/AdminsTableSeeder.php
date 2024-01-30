<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Delete existing records from the admins table
        DB::table('admins')->truncate();

        // Seed a single record with username 'admin' and hashed password 'admin'
        DB::table('admins')->insert([
            'username' => 'admin',
            'password' => Hash::make('admin'),
        ]);
    }
}
