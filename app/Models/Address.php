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

    protected $primaryKey = 'addressid';
    protected $connection = 'mysql';

    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }

    protected $fillable = [
        'userid',
        'postcode',
        'country',
        'city',
        'street',


    ];
}
