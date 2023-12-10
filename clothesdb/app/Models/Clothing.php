<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clothing extends Model
{
    use HasFactory;
    protected $table ='clothings';
    protected $fillable = ['image_URL', 'name', 'description', 'price', 'stockavailability'];

    protected $casts = [
        'price' => 'decimal:2',
        'stockavailability' => 'integer',
    ];
}
