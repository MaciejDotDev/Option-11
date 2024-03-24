<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotifiedOfStock extends Model
{
    protected $table = 'stock_alert_event';
    protected $primaryKey = 'stock_alert_id';

    protected $fillable = ['wishlistid', 'userid'];

    public function wishlist()
    {
        return $this->belongsTo(Wishlist::class, 'wishlistid', 'wishlistid');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userid', 'userid');
    }
}
