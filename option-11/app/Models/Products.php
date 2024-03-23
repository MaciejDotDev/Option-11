<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categories;

class Products extends Model
{
    protected $primaryKey = 'productid';
    protected $connection = 'mysql';


    public function products()
    {
        return $this->belongsTo(Categories::class, 'categoryid');
    }

    protected static function boot()
    {
        parent::boot();

        // it listens for sevents cotninuslsy by checking the condition in model
        static::updated(function ($product) {
            if ($product->stockquantity < 5) {
                event(new \App\Events\StockLowEvent($product));
            }
        });
    }
    public function compatability()
    {
        return $this->belongsToMany(Products::class, 'products_parts_compatibility', 'product_id', 'part_id');
    }

    protected $fillable = [
        'productname',
        'description',
        'price',
        'stockquantity',
        'categoryid',
        'imageURL',
        'category',
    ];



}
