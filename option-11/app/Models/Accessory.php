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
    public $timestamps = false;
    protected $primaryKey = 'accessoryid';
    protected $connection = 'mysql';
    protected $fillable = [
        'productname',
        'description',
        'price',
        'stockquantity',
        'imageURL',
        'category',
        'size',
        'colour',
        'accessoryid',
    ];
}
