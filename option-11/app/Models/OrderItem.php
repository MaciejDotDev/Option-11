<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }
    protected $table = 'orderitem';

    protected $primaryKey = 'orderitemid';
    protected $connection = 'mysql';
    protected $fillable = [
        'orderitemid',
        'productid',
        'orderid',
        'sessionid',
     
        
    ];


}
