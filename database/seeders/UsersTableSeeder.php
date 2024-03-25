<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        //Uni Staff Account normal user ( testing purpose )
        user::create([
            'firstname' => 'John',
            'lastname' => 'Doe',
            'email' => 'john@doe.com',
            'phonenumber' => '1234567890',
            'password' => Hash::make('password123'),
        ]);


        $faker = Faker::create();

        // Dummy data for users
        $users = [];

        for ($i = 1; $i <= 30; $i++) {
            $users[] = [
                'firstname' => $faker->firstName,
                'lastname' => $faker->lastName,

                'email' => $faker->unique()->safeEmail,
                'phonenumber' => $faker->phoneNumber,
                'password' => Hash::make('password123'),
                'created_at' => $faker->dateTimeBetween('2022-01-01', '2024-12-31'),
                'updated_at' => $faker->dateTimeBetween('2022-01-01', '2024-12-31'),
            ];
        }

        // Insert dummy data into the 'users' table
        DB::table('users')->insert($users);

    }
}
