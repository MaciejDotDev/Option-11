<?php

namespace App\Exports;

use App\Models\Clothes;
use Maatwebsite\Excel\Concerns\FromCollection;

class ClothesAllExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Clothes::all();
    }
}
