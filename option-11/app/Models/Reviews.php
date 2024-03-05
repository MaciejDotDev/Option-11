<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Products;

class Reviews extends Model
{
    protected $primaryKey = 'reviewid';
    protected $connection = 'mysql';

  
    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }


    protected $fillable = [
        'userid',
        'productid',
        'title',
        'description',
        'stars',
   
    ];

  
    
}
