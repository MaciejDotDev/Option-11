<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductHistory extends Model
{
    use HasFactory;

    protected $primaryKey = 'productsHistoryid';
    protected $connection = 'mysql';

    public function products()
    {
        return $this->belongsTo(Categories::class, 'categoryid');
    }


    protected $fillable = [
        'userid',
        'productid',
        'price',
        'addressid',

    ];

}
