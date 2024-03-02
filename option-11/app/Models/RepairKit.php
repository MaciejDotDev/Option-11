<?php

//Do this to tell the controller where to find the model
namespace App\Models;
//This is the model class, it lets you interact with the database
use Illuminate\Database\Eloquent\Model;
//has factory is a trait that allows you to use the factory method to create new instances of the model
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RepairKit extends Model
{
    //This is the table name
    protected $table = 'repairkits';
    //This is the primary key
    protected $primaryKey = 'repairkitsid';
    //This is the connection name
    protected $connection = 'mysql';
    //These are the fillable fields , they represent the columns in the table
    protected $fillable = [
        'productname',
        'description',
        'price',
        'stockquantity',
        'imageURL',
        'category',
        'CompatibleWithType'
    ];
    //This is the relationship between the bikeparts and the basket
    public function basket()
    {
        return $this->hasMany(Basket::class);
    }
}

