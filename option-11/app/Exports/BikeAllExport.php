<?php

namespace App\Exports;

use App\Models\Bike;
use Maatwebsite\Excel\Concerns\FromCollection;

class BikeAllExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Bike::all();
    }
}
