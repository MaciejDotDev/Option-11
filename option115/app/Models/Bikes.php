<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Bikes extends Model
{   public $timestamps = false;
    protected $primaryKey = 'bikeid';
    protected $connection = 'mysql';
    protected $fillable = [
        'productname',
        'description',
        'price',
        'stockquantity',
        'imageURL',
        'category',
    ];

  
    
}
