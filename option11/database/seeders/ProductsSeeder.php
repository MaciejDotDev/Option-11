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
            'imageURL' => 'mountain_bike.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Road Bike',
            'description' => 'A lightweight road bike for speed.',
            'price' => 599.99,
            'stockquantity' => 10,
            'imageURL' => 'road_bike.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Hybrid Bike',
            'description' => 'A hybrid bike for both on and off-road.',
            'price' => 399.99,
            'stockquantity' => 10,
            'imageURL' => 'hybrid_bike.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Electric Bike',
            'description' => 'An electric bike for those who want to go further.',
            'price' => 799.99,
            'stockquantity' => 10,
            'imageURL' => 'electric_bike.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Kids Bike',
            'description' => 'A kids bike for those who want to start young.',
            'price' => 199.99,
            'stockquantity' => 10,
            'imageURL' => 'kids_bike.jpg',
            'categoryid'=> $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'helmet.jpg',
            'categoryid'=> $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'helmet.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Helmet',
            'description' => 'A helmet to protect your head.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'helmet.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'knee_pads.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'knee_pads.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Knee Pads',
            'description' => 'Knee pads to protect your knees.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'knee_pads.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'gloves.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'gloves.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Gloves',
            'description' => 'Gloves to protect your hands.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'gloves.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'Water Bottle',
            'description' => 'A water bottle to keep you hydrated.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'water_bottle.jpg',
            'categoryid'=>  $accessory->categoryid,
        ]);


        Products::create([
            'productname' => 'Puncture Repair Kit',
            'description' => 'A puncture repair kit for fixing punctures.',
            'price' => 4.99,
            'stockquantity' => 10,
            'imageURL' => 'puncture_repair_kit.jpg',
            'categoryid'=>  $repairkit->categoryid,
         
          
        ]);

        Products::create([
            'productname' => 'Bike Pump',
            'description' => 'A bike pump for pumping up tyres.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'bike_pump.jpg',
            'categoryid'=> $repairkit->categoryid,
          
         
        ]);

        Products::create([
            'productname' => 'Bike Multi-Tool',
            'description' => 'A bike multi-tool for fixing your bike.',
            'price' => 14.99,
            'stockquantity' => 10,
            'imageURL' => 'bike_multi_tool.jpg',
            'categoryid'=> $repairkit->categoryid,
           
        
        ]);

        Products::create([
            'productname' => 'Cycling Jersey',
            'description' => 'A comfortable jersey for your cycling adventures.',
            'price' => rand(50, 150),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'cycling_jersey.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);
        
        Products::create([
            'productname' => 'Biking Shorts',
            'description' => 'Durable shorts for a smooth ride.',
            'price' => rand(30, 80),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'biking_shorts.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);
        
        Products::create([
            'productname' => 'Cycling Jacket',
            'description' => 'A lightweight jacket for changing weather conditions.',
            'price' => rand(60, 120),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'cycling_jacket.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);
        
        Products::create([
            'productname' => 'Biking Tights',
            'description' => 'Tights for aero efficiency during rides.',
            'price' => rand(40, 100),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'biking_tights.jpg',
            'categoryid'=> $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Chain',
            'description' => 'A bike chain for replacing your chain.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'bike_chain.jpg',
            'categoryid'=> $bikepart->categoryid,
            
 
        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit medium',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 44.99,
            'stockquantity' => 10,
            'imageURL' => 'bikerepairkitB.jpg',
            'categoryid'=> $bikepart->categoryid,
       
           
        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit large',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 59.99,
            'stockquantity' => 10,
            'imageURL' => 'bikerepairkitC.jpg',
            'categoryid'=> $bikepart->categoryid,
      
          
           
        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit small',
            'description' => 'A bike Repair Kit for all of your puncture repair needs.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'bikerepairkitA.jpg',
            'categoryid'=> $bikepart->categoryid,
        
           
          
        ]);

        Products::create([
            'productname' => 'Bike Chain',
            'description' => 'A durable chain for smooth cycling.',
            'price' => rand(15, 40),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_chain.jpg',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Pedals',
            'description' => 'Quality pedals for a comfortable ride.',
            'price' => rand(20, 50),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_pedals.jpg',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Handlebar Grips',
            'description' => 'Comfortable grips for better control.',
            'price' => rand(10, 30),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'handlebar_grips.jpg',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Saddle',
            'description' => 'An ergonomic saddle for a smooth ride.',
            'price' => rand(30, 70),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_saddle.jpg',
            'categoryid'=> $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Lights Set',
            'description' => 'A set of lights for safety during night rides.',
            'price' => rand(15, 40),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'bike_lights.jpg',
            'categoryid'=> $bikepart->categoryid,
        ]);

    }
}
