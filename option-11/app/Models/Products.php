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
