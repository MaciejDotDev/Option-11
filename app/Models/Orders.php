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

    public function basket()
    {
        return $this->belongsTo(Basket::class, 'basketid');
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'paymentid');
    }
    public function address()
    {
        return $this->belongsTo(Address::class, 'addressid');
    }
    protected $table = 'orders';
    public $timestamps = false;
    protected $primaryKey = 'ordersid';
    protected $connection = 'mysql';
    protected $fillable = [
        'ordersid',
        'userid',
        'basketid',
        'paymentid',
        'addressid',
        'totalprice',
        'status',
        
    ];
}
