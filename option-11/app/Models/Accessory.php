<?php
namespace App\Models;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accessory extends Model
{
    use HasFactory;

    protected $table = 'accessories';

    protected $primaryKey = 'accessoryid';
    protected $connection = 'mysql';

    public function products()
    {
        return $this->belongsTo(Products::class, 'productid');
    }
    protected $fillable = [
        'productid',
        'category',
        'size',
        'colour',

    ];
}
