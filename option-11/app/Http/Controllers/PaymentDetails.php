<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Payment;
use App\Models\Basket;
use App\Models\Products;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class PaymentDetails extends Controller
{

    public function payment () {

        $basket = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->first(); 
     

        if(is_null($basket)) {
            return redirect()->back();

        }else {
            return Inertia::render('Checkout');
        }
                


    }

    
    
    public function addPayment (Request $request) {
        
       

        $totalPrice = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->sum('totalprice');
        
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
       
      $basket = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->get();
      $lineItems = [];

      $bikes = [];
      foreach ($bikes as $item) {

          
          $bikes[] = Products::where('productid', $item->productid)->first();
      }
        foreach ($bikes as $product) {
            
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $product->productname,
                        'images' => [$product->description]
                    ],
                    'unit_amount' => $product->price * 100,
                ],
                'quantity' => 1,
            ];
        }

        $session = \Stripe\Checkout\Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('', [], true),
            'cancel_url' => route('checkout.cancel', [], true),
        ]);
        return Inertia::location($session->url);
 
          

      


    }
}
