<?php

namespace App\Exports;

use App\Models\BikePart;
use Maatwebsite\Excel\Concerns\FromCollection;

class BikePartAllExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return BikePart::all();
    }
}
