<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categories;
use Illuminate\Support\Facades\Auth;
class Products extends Model
{
    protected $primaryKey = 'productid';
    protected $connection = 'mysql';


    public function products()
    {
        return $this->belongsTo(Categories::class, 'categoryid');
    }
    public function scopeFrame($query)
    {
        return $query->where('productname', 'like', '%frame%');
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
