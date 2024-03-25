<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
class Payment extends Model
{   public $timestamps = false;
    protected $primaryKey = 'payment_id';
    protected $connection = 'mysql';

    public function user()
    {
        return $this->hasOne(User::class);
    }
    
    protected $fillable = [
        'payment_id',
        'cardNumber',
        'expiryDate',
        'cvv',
        'userid',
       
    ];

  
    
}
