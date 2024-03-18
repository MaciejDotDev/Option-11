<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Bikes;
use App\Models\BikesPart;
class ProductPartsCheck extends Model
{
    use HasFactory;

    protected $primaryKey = 'partscompatibilityid';
    protected $connection = 'mysql';
    protected $table = 'products_parts_compatibility';
    public function bikes()
    {
        return $this->belongsTo(Bikes::class, 'bikeid');
    }

    public function compatability()
    {
        return $this->belongsTo(Products::class, 'bikepartsid');
    }

    protected $fillable = [

        'bikeid',
        'bikepartsid',


    ];
}
