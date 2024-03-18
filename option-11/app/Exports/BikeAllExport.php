<?php

namespace App\Exports;

use App\Models\Bikes;
use Maatwebsite\Excel\Concerns\FromCollection;

class BikeAllExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Bikes::all();
    }
}
