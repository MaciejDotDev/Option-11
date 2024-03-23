<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Refunds extends Model
{
    use HasFactory;

    protected $primaryKey = 'refundid';
    protected $connection = 'mysql';

    protected $table = 'refunds';

    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }

    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }
    protected $fillable = [
        'refundid',
        'productid',
        'userid',
        'quantity',
        'totalprice',
        'status',


    ];
}
