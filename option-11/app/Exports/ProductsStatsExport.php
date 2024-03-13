<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;

class ProductsStatsExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */

    /**
    * @return \Illuminate\Support\Collection
    */

    use Exportable;

    /**
    * It's required to define the fileName within
    * the export class when making use of Responsable.
    */
    private $fileName = 'productsStats.xlsx';

    /**
    * Optional Writer Type
    */
    private $writerType = Excel::XLSX;

    /**
    * Optional headers
    */
    private $headers = [
        'Content-Type' => 'text/csv',
    ];
    public function collection()
    {
        $data = collect();




    }
}
