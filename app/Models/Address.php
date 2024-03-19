<?php
namespace App\Models;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $table = 'address';
    public $timestamps = false;
    protected $primaryKey = 'addressid';
    protected $connection = 'mysql';
    protected $fillable = [
        'postcode',
        'country',
        'city',
        'street',
        'house_no',
        
    ];
}
