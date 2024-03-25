<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Repair extends Model
{
    protected $table = 'repairs';
    protected $primaryKey = 'repairid';
    protected $connection = 'mysql';
    protected $fillable = [
        'repairname',
        'description',
        'price',
        'stockquantity',
        'imageURL',
        'category',
        'CompatibleWithType'
    ];
}
