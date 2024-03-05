<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Payment;
use App\Models\Basket;
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

        $session = \Stripe\Checkout\Session::create([
            'line_items'  => [
                [
                    'price_data' => [
                        'currency'     => 'gbp',
                        'product_data' => [
                            'name' => 'gimme money!!!!',
                        ],
                        'unit_amount'  => round($totalPrice *100,1),
                    ],
                    'quantity'   => 1,
                    
                ],
            ],
            'mode'        => 'payment',
            'success_url' =>  route('dashboard'),
            'cancel_url'  => route('basket'),
          #
        ]);
        return Inertia::location($session->url);
 
          

      


    }
}
