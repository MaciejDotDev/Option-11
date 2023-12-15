<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'basketid';
    protected $connection = 'mysql';
    protected $fillable = [
        'basketid',
        'userid',
        'bikeid',
        'quantity',
        'totalprice',
        'status',

        
    ];
    
}
