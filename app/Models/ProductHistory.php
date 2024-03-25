<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductHistory extends Model
{
    use HasFactory;

    protected $primaryKey = 'productsHistoryid';
    protected $connection = 'mysql';
    protected $table = 'products_history';
    public function products()
    {
        return $this->belongsTo(Categories::class, 'categoryid');
    }


    protected $fillable = [
      
        'productid',
        'productname',
        'category',

    ];

}
