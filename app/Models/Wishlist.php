<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;
    
protected $primaryKey = 'wishlistid';
protected $table ='wishlist';
        protected $fillable = ['userid', 'bikeid','accessoryid','clothingid','bikepartsid','repairkitsid'];
    
        public function user()
        
            {
                return $this->belongsTo(User::class, 'userid');
            }
        
            public function bike()
            {
                return $this->belongsTo(Bikes::class, 'bikeid')->withDefault();
            }
        
            public function accessory()
            {
                return $this->belongsTo(Accessory::class, 'accessoryid')->withDefault();
            }
        
            public function clothing()
            {
                return $this->belongsTo(Clothes::class, 'clothingid')->withDefault();
            }
        
            public function bikePart()
            {
                return $this->belongsTo(BikePart::class, 'bikepartsid')->withDefault();
            }
        
            public function repairKit()
            {
            return $this->belongsTo(RepairKit::class, 'repairkitsid')->withDefault();
        }

    }
