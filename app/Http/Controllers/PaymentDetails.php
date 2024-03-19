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
            return Inertia::render('Welcome');
        }else {
            return Inertia::render('Checkout');
        }
                


    }

    
    
    public function addPayment (Request $request) {
        
       

        
            $validateInput = $request->validate([
                'cardNumber' => 'required',
                'expiryDate' => 'required',
                'cvv' => 'required',
                
        
            ]);
        
        
        
           
        
           
        

        
                $payment = new Payment();
                $payment->userid =  auth()->user()->userid;
                $payment->cardNumber = Crypt::encrypt(request('cardNumber'));
                $payment->expiryDate = Crypt::encrypt(request('expiryDate'));
                $payment->cvv = Crypt::encrypt(request('cvv'));
             
                $payment->save();
           
                return redirect('makeOrder');
        
           
                // ManageAccount.php
          

      


    }
}
