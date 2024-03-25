<?php

namespace App\Exports;

use App\Models\Accessory;
use Maatwebsite\Excel\Concerns\FromCollection;

class AccessoryExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Accessory::all();
    }
}
