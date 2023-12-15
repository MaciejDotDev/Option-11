<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model

{
    public $timestamps = false;
    use HasFactory;
    protected $connection = 'mysql';
    public function user()
    {
        return $this->hasOne(User::class);
    }

    protected $fillable = [
        'postcode',
        'country',
        'city',
        'street',
        'house_no',
    ];
    
}
