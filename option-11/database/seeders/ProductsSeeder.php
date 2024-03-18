<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Products;
use App\Models\Categories;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bike = Categories::where('name','bike')->first();
        $accessory = Categories::where('name','accessory')->first();
        $repairkit = Categories::where('name','repairkit')->first();
        $bikepart = Categories::where('name','bikepart')->first();
        $clothing = Categories::where('name','clothing')->first();
        Products::create([
            'productname' => 'Mountain Bike',
            'description' => 'A sturdy mountain bike for off-road adventures.',
            'price' => 499.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/mountain-bike-1.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Road Bike',
            'description' => 'A lightweight road bike for speed.',
            'price' => 599.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/road-bike-1.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Hybrid Bike',
            'description' => 'A hybrid bike for both on and off-road.',
            'price' => 399.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/hybrid-bike.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Electric Bike',
            'description' => 'An electric bike for those who want to go further.',
            'price' => 799.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/electric-bike-1.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Kids Bike',
            'description' => 'A kids bike for those who want to start young.',
            'price' => 199.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/kids-bike-1.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/helmet-1.jpg',
            'categoryid'=> $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/helmet-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/helmet-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/knee-pads-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/knee-pads-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/knee-pads-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/gloves-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/gloves-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/gloves-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Water Bottle',
            'description' => 'A water bottle to keep you hydrated.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/water-bottle-1.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);


        Products::create([
            'productname' => 'Puncture Repair Kit',
            'description' => 'A puncture repair kit for fixing punctures.',
            'price' => 4.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/puncture-repair-kit.jpg',
            'categoryid'=>  $repairkit->categoryid,


        ]);

        Products::create([
            'productname' => 'Bike Pump',
            'description' => 'A bike pump for pumping up tyres.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/bike-pump.jpg',
            'categoryid'=> $repairkit->categoryid,


        ]);

        Products::create([
            'productname' => 'Bike Multi-Tool',
            'description' => 'A bike multi-tool for fixing your bike.',
            'price' => 14.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/multi-tool.jpg',
            'categoryid'=> $repairkit->categoryid,


        ]);

        Products::create([
            'productname' => 'Cycling Jersey',
            'description' => 'A comfortable jersey for your cycling adventures.',
            'price' => rand(50, 150),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/clothing-products/Jersey-1.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Biking Shorts',
            'description' => 'Durable shorts for a smooth ride.',
            'price' => rand(30, 80),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/clothing-products/shorts-1.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Cycling Jacket',
            'description' => 'A lightweight jacket for changing weather conditions.',
            'price' => rand(60, 120),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/clothing-products/jacket-1.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Biking Tights',
            'description' => 'Tights for aero efficiency during rides.',
            'price' => rand(40, 100),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/clothing-products/tights-1.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Chain',
            'description' => 'A bike chain for replacing your chain.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/parts-products/bike-chain.jpg',
            'categoryid'=> $bikepart->categoryid,


        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit medium',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 44.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/repair-kit-m.jpg',
            'categoryid'=> $repairkit->categoryid,


        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit large',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 59.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/repair-kit-l.jpg',
            'categoryid'=> $repairkit->categoryid,



        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit small',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/repair-kit-s.jpg',
            'categoryid'=> $repairkit->categoryid,



        ]);


        Products::create([
            'productname' => 'Bike Pedals',
            'description' => 'Quality pedals for a comfortable ride.',
            'price' => rand(20, 50),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/bike-pedals.png',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Handlebar Grips',
            'description' => 'Comfortable grips for better control.',
            'price' => rand(10, 30),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/red-grips.png',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Saddle',
            'description' => 'An ergonomic saddle for a smooth ride.',
            'price' => rand(30, 70),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/bike-seat.png',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Lights Set',
            'description' => 'A set of lights for safety during night rides.',
            'price' => rand(15, 40),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/lights-set.png',
            'categoryid'=> $bikepart->categoryid,
        ]);


        Products::create([
            'productname' => 'Electric Frame',
            'description' => 'A frame for building your own electric bike.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/electric-frame.png',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Road Frame',
            'description' => 'A frame for building your own road bike.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/road-frame.png',
            'categoryid'=> $bikepart->categoryid,

        ]);

        Products::create([
            'productname' => 'Mountain Frame',
            'description' => 'A frame for building your own mountain bike.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/mountain-frame.png',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Hybrid Frame',
            'description' => 'A frame for building your own hybrid bike.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/hybrid-frame.png',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Kids Frame',
            'description' => 'A frame for building your own kids bike.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/kids-frame.png',
            'categoryid'=> $bikepart->categoryid,
        ]);

    }
}


