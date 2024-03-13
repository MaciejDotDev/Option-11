<?php

namespace App\Exports;

use Carbon\Carbon;
use App\Models\Product;
use App\Models\ProductHistory;
use Maatwebsite\Excel\Excel;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;

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

        $data = collect();


        $amountproductsold2024 = [];
        $amountproductsold2023 = [];

        $months = [];

        $currentYear = Carbon::now()->year;
        $lastYear = Carbon::now()->year - 1;



        for ($m = 1; $m <= 12; $m++) {
            $months[] = date('F', mktime(0, 0, 0, $m, 1, date('Y')));
        }


        for ($i = 1; $i <= 12; $i++) {
            $jan = ProductHistory::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', $i)
                ->get()->count();
            $amountproductsold2024[$i] = $jan;


            // Add your custom values to the collection
        }
        for ($i = 1; $i <= 12; $i++) {
            $jan = ProductHistory::whereYear('created_at', $lastYear)
                ->whereMonth('created_at', $i)
                ->get()->count();
            $amountproductsold2023[$i] = $jan;


          

        }

        $totalsold2023= ProductHistory::whereYear('created_at', $lastYear)->get()->count();
        $totalsold2024= ProductHistory::whereYear('created_at', $currentYear)->get()->count();

        $mostsoldProduct = ProductHistory::select('productname')
        ->groupBy('productname')
        ->orderByRaw('COUNT(*) DESC')
        ->limit(1)
        ->get("productname");
        $leastsoldProduct = ProductHistory::select('productname')
        ->groupBy('productname')
        ->orderByRaw('COUNT(*) ASC')
        ->limit(1)
        ->get("productname");

        $soldproduct = json_decode($mostsoldProduct, true);
        $leastproduct = json_decode($leastsoldProduct, true);
        $avarage2024 = $totalsold2024 / 12;

        $avarage2023 = $totalsold2023 / 12;


        $avarageToString = ($avarage2024 - $avarage2023) / $avarage2023 *100;

        if ($avarage2024 <= 0 || $avarage2023 <= 0) {

            $data->push(["Amount of products sold in $currentYear"], [$months], [$amountproductsold2024], ["Amount of created accounts in $lastYear"], [$months], [$amountproductsold2023]);
            return $data;
        }
        $data->push(["Amount of products sold in $currentYear"], [$months], [$amountproductsold2024], ["Amount of created accounts in $lastYear"], [$months], [$amountproductsold2023], ["most sold product:"], [ $soldproduct[0]['productname']], ["least sold product:"],[$leastproduct[0]['productname']], ["total products sold in $lastYear:"], [ $totalsold2023],["total sold in $currentYear"],[$totalsold2024],["increase of products sold from $lastYear and $currentYear"],[ "$avarageToString%"] );
        return $data;

    }
}
