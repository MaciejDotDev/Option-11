<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Products;
use App\Models\User;
use App\Models\Bikes;
class Basket extends Model
{

    protected $primaryKey = 'basketid';
    protected $connection = 'mysql';


    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }

    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }
    protected $fillable = [
        'basketid',
        'productid',
        'userid',
        'quantity',
        'totalprice',
        'status',


    ];

}
