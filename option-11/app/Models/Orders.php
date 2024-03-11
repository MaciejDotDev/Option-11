<?php
namespace App\Models;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }


    public function address()
    {
        return $this->belongsTo(Address::class, 'addressid');
    }


    public function transaction()
    {
        return $this->hasOne(Transactions::class, 'orderid');
    }



    protected $table = 'orders';

    protected $primaryKey = 'orderid';
    protected $connection = 'mysql';
    protected $fillable = [
        'userid',
        'trackingcode',
        'addressid',
        'totalprice',
        'status',

    ];
}
