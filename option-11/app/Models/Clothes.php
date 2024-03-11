<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Clothes extends Model
{   
    protected $primaryKey = 'clothingid';
    protected $connection = 'mysql';
    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }
    protected $fillable = [
        'productid',
        'category',
        'colour',
    ];

  
    
}
