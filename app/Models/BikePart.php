<?php

//Do this to tell the controller where to find the model
namespace App\Models;
//This is the model class, it lets you interact with the database
use Illuminate\Database\Eloquent\Model;
//has factory is a trait that allows you to use the factory method to create new instances of the model
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BikePart extends Model
{
    //This is the table name
    protected $table = 'bikeparts';
    //This is the primary key
    protected $primaryKey = 'productid';
    //This is the connection name
    protected $connection = 'mysql';

    //We only want to show the products who's product name ends in or contains "frame"

    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }
    public function scopeFrame($query)
    {
        return $query->whereHas('products', function ($q) {
            $q->where('productname', 'like', '%frame%');
        });
    }

    //These are the fillable fields , they represent the columns in the table


    protected $fillable = [
        'productid',
        'category',
        'colour',
        'size',

    ];
    //This is the relationship between the bikeparts and the basket
    public function basket()
    {
        return $this->hasMany(Basket::class);
    }
}
