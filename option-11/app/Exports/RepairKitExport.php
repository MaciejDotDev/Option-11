<?php

namespace App\Exports;

use App\Models\RepairKit;
use Maatwebsite\Excel\Concerns\FromCollection;

class RepairKitExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return RepairKit::all();
    }
}
