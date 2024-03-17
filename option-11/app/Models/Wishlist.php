<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;
    protected $primaryKey = 'wishlistid';
protected $table ='wishlist';


        public function user()

            {
                return $this->belongsTo(User::class, 'userid');
            }



            public function products()
            {
                return $this->belongsTo(Products::class, 'productid');
            }

            protected $fillable = ['userid', 'productid'];
    }
