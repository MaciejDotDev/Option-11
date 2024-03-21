<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Payment;
use App\Models\Basket;
use App\Models\Orders;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Faker\Factory as Faker;


use App\Models\Bikes;
use App\Models\BikePart;
use App\Models\Clothes;
use App\Models\RepairKit;
use App\Models\Accessory;
class OrdersController extends Controller
{

    
    public function makeOrder () {

        $basket = Basket::where('userid', auth()->user()->userid)->get(); 

        
        $totalPrice = Basket::where('userid', auth()->user()->userid)->sum('totalprice');
        $faker = Faker::create();

        $dummyValue = $faker->word;

        foreach ($basket as $item) {
            $payment = Payment::where('userid',auth()->user()->userid)->first();

            $orders = new Orders();
            $orders->userid =  auth()->user()->userid;

            $orders->basketid = $item->basketid;
            $orders->payment_id = $payment->payment_id;
            $orders->totalprice = $totalPrice;
                
            $orders->status = 'paid';
            $item->status = 'closed';
            $orders->trackingcode = 'Not provided yet';
            $item->save();
            $orders->save();
            



        }

        return redirect('/');

       
     

        
                


    }

    
    
    public function showAll () {

        $orders = Orders::where('userid',  auth()->user()->userid)->get();

        $total = Orders::where('userid',  auth()->user()->userid)->first();
        $basketitems = [];

      

        foreach ($orders as $item) {
            $basket = Basket::where('basketid', $item->basketid)->first();

            $basketitems[] = $basket;

            $bikes = [];
            foreach ($basketitems as $item1) {

                $bike = Bikes::where('bikeid', $item1->bikeid)->first();
                $bikePart = BikePart::where('bikepartsid', $item1->bikepartsid)->first();
                $clothes = Clothes::where('clothingid', $item1->clothingid)->first();
                $repairkits = RepairKit::where('repairkitsid', $item1->repairkitsid)->first();
                $accessory = Accessory::where('accessoryid', $item1->accessoryid)->first();
                if ($bike) {
        
        
                    $bikes[] = $bike;
                    
                } else if ($bikePart) {
        
                    $bikes[] = $bikePart;
        
        
                } else if ($clothes) {
        
        
                    $bikes[] = $clothes;
        
        
                    
                }  else if ($repairkits) {
        
        
                    $bikes[] = $repairkits;
        
        
                    
                }  else if ($accessory) {
        
        
                    $bikes[] = $accessory;
        
        
                    
                } else {

                  


                }
            }


        }
      
       
        if ( count($basketitems) > 0){

            return Inertia::render('OrdersHistory', ['orders' => $orders, 'basketitems' => $basketitems, 'bikes' => $bikes, 'total' => $total]);



        } else {


            return Inertia::render('OrdersHistory', ['orders' => $orders, 'basketitems' => $basketitems, 'total' => $total]);


        }

   
        
        



    }
    }

