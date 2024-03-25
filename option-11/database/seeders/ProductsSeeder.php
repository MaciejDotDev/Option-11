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
        $bike = Categories::where('name', 'bike')->first();
        $accessory = Categories::where('name', 'accessory')->first();
        $repairkit = Categories::where('name', 'repairkit')->first();
        $bikepart = Categories::where('name', 'bikepart')->first();
        $clothing = Categories::where('name', 'clothing')->first();
        Products::create([
            'productname' => 'Mountain Bike',
            'description' => 'Perfectly designed for conquering the most demanding terrains, this durable mountain bike serves as the optimal partner for venturing into uncharted off-road trails and undertaking exciting journeys across mountainous regions and rugged landscapes.',
            'price' => 499.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/mountain-bike-1.jpg',
            'categoryid' => $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Road Bike',
            'description' => 'Engineered for enthusiasts and professionals alike, this road bike balances lightweight design with rugged durability to provide a high-speed, efficient cycling experience, perfect for racing and fast-paced road adventures.',
            'price' => 599.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/road-bike-1.jpg',
            'categoryid' => $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Hybrid Bike',
            'description' => 'A versatile hybrid bike designed for optimal performance on both paved roads and dirt trails. It combines the best features of road and mountain bikes, making it an excellent choice for riders looking for a bike that can handle a variety of terrains and conditions. Its comfortable seating position and durable construction ensure a smooth and enjoyable ride, whether you are commuting to work or exploring off-road paths.',
            'price' => 399.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/hybrid-bike.jpg',
            'categoryid' => $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Electric Bike',
            'description' => 'This electric bike is designed for those adventurers who wish to push their limits and explore further than ever before. It combines the latest in electric bike technology with comfort and versatility, making it ideal for long rides across a variety of terrains. Its powerful motor assists the rider in challenging conditions, ensuring that even the steepest hills can be conquered with ease. Perfect for both the urban commuter and the outdoor enthusiast, this electric bike offers an efficient, eco-friendly, and fun way to travel.',
            'price' => 799.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/electric-bike-1.jpg',
            'categoryid' => $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Kids Bike',
            'description' => 'Designed specifically for children eager to embark on their first cycling adventures, this kids bike features a combination of safety, durability, and child-friendly design. It serves as an excellent introduction to cycling, encouraging physical activity and outdoor play. Its robust construction ensures it can withstand the rigors of learning to ride, while the size and ergonomics are tailored to suit young riders, making it the perfect choice for kids to start young.',
            'price' => 199.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/kids-bike-1.jpg',
            'categoryid' => $bike->categoryid,
        ]);


        Products::create([
            'productname' => 'Summit Strider - Mountain Bike',
            'description' => 'Crafted for thrill-seekers and outdoor enthusiasts, the Summit Strider Mountain Bike is meticulously designed to deliver unparalleled performance on rugged terrains and steep inclines. This high-end mountain bike features advanced suspension technology to absorb shocks, durable components that withstand the harshest conditions, and a lightweight frame for agile maneuvering. Whether tackling challenging mountain trails or exploring scenic off-road paths, the Summit Strider ensures an exhilarating and secure riding experience.',
            'price' => 1499,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/summitStrider.png',
            'categoryid' => $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'RetroRide Classic - Road Bike',
            'description' => "The RetroRide Classic Road Bike combines the timeless charm and aesthetics of a bygone era with the reliability and performance expected by today's road cyclists. It's not just a bike; it's a piece of history on two wheels, designed for those who appreciate the finer details and the nostalgia of vintage design while enjoying a leisurely ride through the countryside or city streets.",
            'price' => 499,
            'stockquantity' => 10,
            'imageURL' => 'product-images/bike-products/vintageBike.png',
            'categoryid' => $bike->categoryid,
        ]);

        Products::create([
            'productname' => 'Helmet',
            'description' => 'This product offers a helmet designed specifically to provide protection for your head during cycling activities, ensuring safety and comfort with its durable construction and thoughtful design.',
            'price' => 49.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/helmet-1.jpg',
            'categoryid' => $accessory->categoryid,
        ]);



        Products::create([
            'productname' => 'Bike Pump',
            'description' => 'This essential cycling accessory is meticulously designed to easily and efficiently inflate bike tyres, ensuring you can maintain the optimal tyre pressure for a smooth and efficient riding experience. Compact and durable, it is an indispensable tool for both casual riders and serious cyclists alike, providing a reliable solution for tyre maintenance on-the-go.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/bike-pump.jpg',
            'categoryid' => $repairkit->categoryid,


        ]);

        Products::create([
            'productname' => 'Bike Multi-Tool',
            'description' => 'An indispensable tool for cyclists, this compact multi-tool equips you with all the necessary implements to perform basic repairs and adjustments to your bike while on the road. From tightening bolts to adjusting the saddle, this multi-tool has got you covered, ensuring you can tackle minor mechanical issues without the need for a full tool kit.',
            'price' => 14.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/multi-tool.jpg',
            'categoryid' => $repairkit->categoryid,


        ]);
        Products::create([
            'productname' => 'Bike Reapair Kit medium',
            'description' => 'A comprehensive bike Repair Kit designed to cater to all your puncture repair needs. It includes various tools and patches to ensure you can quickly and effectively address any tire punctures you might encounter on your cycling adventures, making it an essential accessory for both casual and serious cyclists.',
            'price' => 44.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/repair-kit-m.jpg',
            'categoryid' => $repairkit->categoryid,


        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit large',
            'description' => 'A bike Repair Kit for all of your puncture repair needs, designed to offer cyclists a comprehensive solution for fixing punctures with ease. This large kit contains all the necessary tools and materials needed to repair bike tire punctures quickly and efficiently, ensuring that you can get back on the road as soon as possible without the need for professional assistance. Perfect for both casual riders and serious enthusiasts, this kit is an essential addition to your cycling gear.',
            'price' => 59.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/repair-kit-l.jpg',
            'categoryid' => $repairkit->categoryid,



        ]);

        Products::create([
            'productname' => 'Bike Reapair Kit small',
            'description' => 'A comprehensive bike Repair Kit designed to cater to all your puncture repair needs, ensuring timely and efficient fixes. This smaller version includes essential tools and patches, making it highly suitable for carrying on short trips or for casual riders who need a basic set of repair tools to handle unexpected punctures while on the go.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/repair-products/repair-kit-s.jpg',
            'categoryid' => $repairkit->categoryid,



        ]);

        Products::create([
            'productname' => 'Knee Pads',
            'description' => 'These knee pads are designed to offer robust protection for your knees during cycling, especially when tackling rough terrains. Made with high-quality materials, they ensure both comfort and safety, reducing the risk of knee injuries.',
            'price' => 29.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/knee-pads-1.jpg',
            'categoryid' => $accessory->categoryid,
        ]);

        Products::create([
            'productname' => 'Gloves',
            'description' => 'Ergonomically designed gloves crafted to safeguard your hands from blisters and abrasions, enhancing grip and comfort during extensive cycling sessions or when navigating through rough terrains.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/gloves-1.jpg',
            'categoryid' => $accessory->categoryid,
        ]);

        Products::create([
            'productname' => 'Water Bottle',
            'description' => 'A meticulously designed water bottle ensuring you stay hydrated throughout your cycling adventures. Its robust, leak-proof design makes it the perfect companion for both short rides around the city and long, challenging treks in the great outdoors.',
            'price' => 9.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/water-bottle-1.jpg',
            'categoryid' => $accessory->categoryid,
        ]);
        Products::create([
            'productname' => 'ShadowGuard MTB Helmet',
            'description' => 'The ShadowGuard MTB Helmet is a premium quality cycling helmet that combines sleek aesthetics with cutting-edge safety features and excellent ventilation. Designed with state-of-the-art materials, it offers maximum protection while keeping the rider cool and comfortable, making it ideal for both recreational and competitive cyclists.',
            'price' => 100,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/bikeHelmet.png',
            'categoryid' => $accessory->categoryid,
        ]);

        Products::create([
            'productname' => 'EclipseGuard Knee Pads',
            'description' => 'Engineered to provide cyclists with top-tier protection and comfort with a sleek black design. These knee pads are designed with advanced materials that not only ensure durability and safety but also offer a stylish appearance perfect for cyclists who prioritize both aesthetics and functionality. The ergonomic fit guarantees that the knee pads remain securely in place during rides, providing unparalleled protection without compromising on comfort.',
            'price' => 35,
            'stockquantity' => 10,
            'imageURL' => 'product-images/accessory-products/blackKneePads.jpg',
            'categoryid' => $accessory->categoryid,


        ]);





        Products::create([
            'productname' => 'Cycling Jersey',
            'description' => 'A high-quality jersey designed for comfort and performance during your cycling adventures. Made with breathable material, it helps regulate body temperature and reduce wind resistance, providing a more enjoyable cycling experience.',
            'price' => rand(50, 150),
            'stockquantity' => 20,
            'imageURL' => 'product-images/clothing-products/Jersey-1.jpg',
            'categoryid' => $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Biking Shorts',
            'description' => 'Constructed for long-lasting wear, these biking shorts are designed to provide riders with a comfortable and friction-free experience, making them ideal for both leisurely rides and competitive cycling. Their durable material ensures they can withstand the demands of regular use, offering a smooth and enjoyable ride every time.',
            'price' => rand(30, 80),
            'stockquantity' => 20,
            'imageURL' => 'product-images/clothing-products/shorts-1.jpg',
            'categoryid' => $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Cycling Jacket',
            'description' => 'A versatile, lightweight jacket designed to accommodate the unpredictable nature of weather, making it an ideal choice for cyclists and outdoor enthusiasts who need adaptable and reliable protection against the elements.',
            'price' => rand(60, 120),
            'stockquantity' => 20,
            'imageURL' => 'product-images/clothing-products/jacket-1.jpg',
            'categoryid' => $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Biking Tights',
            'description' => 'These tightly fitted tights are specifically designed to reduce air resistance and optimize aerodynamic efficiency during bike rides. They are made from high-quality, stretchable fabrics that conform closely to the body, helping cyclists achieve better speed and performance while maintaining comfort and flexibility.',
            'price' => rand(40, 100),
            'stockquantity' => 20,
            'imageURL' => 'product-images/clothing-products/tights-1.jpg',
            'categoryid' => $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'ShadowRide Jersey',
            'description' => "This high-performance jersey stands out with its lightweight and breathable fabric, which guarantees utmost comfort during rides. It's designed to provide an exceptional fit and to enhance airflow, helping to keep the cyclist cool under any condition.",
            'price' => 50,
            'stockquantity' => 20,
            'imageURL' => 'product-images/clothing-products/blackJersey.jpg',
            'categoryid' => $clothing->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Chain',
            'description' => 'This bike chain is designed for ease of replacement, ensuring your bike maintains optimal performance. Perfect for maintenance and repair, it is constructed for durability and smooth gearing to enhance your cycling experience.',
            'price' => 19.99,
            'stockquantity' => 10,
            'imageURL' => 'product-images/parts-products/bike-chain.jpg',
            'categoryid' => $bikepart->categoryid,


        ]);


        Products::create([
            'productname' => 'Bike Pedals',
            'description' => 'These high-quality bike pedals are engineered for an enhanced and comfortable riding experience, ensuring both safety and performance. They provide a sturdy platform for your feet, offering superior grip and durability, making them suitable for all types of cycling adventures.',
            'price' => rand(20, 50),
            'stockquantity' => 20,
            'imageURL' => 'product-images/parts-products/bike-pedals.png',
            'categoryid' => $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Handlebar Grips',
            'description' => 'Ergonomically designed for enhanced comfort and control, these handlebar grips ensure a better hold and improved handling for a safer and more enjoyable cycling experience.',
            'price' => rand(10, 30),
            'stockquantity' => 20,
            'imageURL' => 'product-images/parts-products/red-grips.png',
            'categoryid' => $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Saddle',
            'description' => 'An ergonomic saddle crafted to enhance comfort and ensure a smoother riding experience, designed with attention to providing a supportive and comfortable seat for long or short bike journeys.',
            'price' => rand(30, 70),
            'stockquantity' => 20,
            'imageURL' => 'product-images/parts-products/bike-seat.png',
            'categoryid' => $bikepart->categoryid,
        ]);

        Products::create([
            'productname' => 'Bike Lights Set',
            'description' => 'A comprehensive set of bike lights designed to enhance visibility and ensure safety for cyclists during night-time riding. This set includes both front and rear lights that can be easily attached to any bicycle, providing bright and reliable illumination to navigate safely in the dark. Essential for any cyclist who rides after sunset or before dawn.',
            'price' => rand(15, 40),
            'stockquantity' => 20,
            'imageURL' => 'product-images/parts-products/lights-set.png',
            'categoryid' => $bikepart->categoryid,
        ]);

        //Bikes to Parts
        Products::create([ // 29
            'productname' => 'Electric Frame',
            'description' => 'A highly adaptable and customisable frame specifically intended for enthusiasts looking to construct their own electric bike. This frame offers an excellent foundation for building a truly bespoke electric bicycle that can cater to personal preferences in aesthetics, functionality, and performance.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/EletricFrame.png',
            'categoryid' => $bikepart->categoryid,
        ]);

        Products::create([ // 30
            'productname' => 'Road Frame',
            'description' => 'An ideal road bike frame for DIY enthusiasts and professional builders alike. This meticulously designed frame provides a solid foundation for creating a customized road bike tailored to your cycling preferences and performance requirements.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/RoadFrame.png',
            'categoryid' => $bikepart->categoryid,

        ]);

        Products::create([ // 31
            'productname' => 'Mountain Frame',
            'description' => 'A premium quality frame engineered specifically for those looking to construct a custom mountain bike tailored to their unique preferences and riding style. This frame provides a robust foundation that supports a wide range of customizations, from the choice of wheels and suspension systems to gears and finishes, allowing for a fully personalized mountain biking experience.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/MountainFrame.png',
            'categoryid' => $bikepart->categoryid,
        ]);

        Products::create([ // 32
            'productname' => 'Hybrid Frame',
            'description' => 'Engineered for cyclists aspiring to build a custom hybrid bike, this frame offers flexibility, durability, and an ideal platform for combining the attributes of both road and mountain bikes into a unique hybrid design. Perfect for crafting a bike tailored to individual riding preferences and needs, ensuring a comfortable and versatile cycling experience across various terrains.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/HybridFrame.png',
            'categoryid' => $bikepart->categoryid,
        ]);

        Products::create([ // 33
            'productname' => 'Kids Frame',
            'description' => 'This frame provides a customizable, robust starting point for constructing a bicycle specifically for children, combining elements of safety, durability, and fun in design to create an encouraging and enjoyable first biking experience for young riders.',
            'price' => rand(100, 200),
            'stockquantity' => rand(5, 20),
            'imageURL' => 'product-images/parts-products/KidsFrame.png',
            'categoryid' => $bikepart->categoryid,
        ]);

    }
}


