<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

use App\Models\User;
use App\Models\Products;
class BasketItem extends Model
{
 
    protected $primaryKey = 'basket_itemid';
    protected $connection = 'mysql';


 
    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }

    protected $fillable = [
    
  
    
        'quantity',
        'totalprice',
        'productid',
        'status',

        
    ];
    
}
