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
    private $fileName = 'productsStats.xlsx'; //name of the file

    /**
     * Optional Writer Type
     */
    private $writerType = Excel::XLSX; // type of file

    /**
     * Optional headers
     */
    private $headers = [
        'Content-Type' => 'text/csv',
    ];
    public function collection()
    {


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

                $feb = ProductHistory::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', $i)
                ->get();

                $num = 0;

                foreach ($feb as $item) $num   =  $num + $item->quantity;

                $amountproductsold2024[$i] = $num ;



            // Add your custom values to the collection
        }
        for ($i = 1; $i <= 12; $i++) { // goes through a loop and finds records for each month
            $jan = ProductHistory::whereYear('created_at', $lastYear)
                ->whereMonth('created_at', $i)
                ->get()->count();

                $feb = ProductHistory::whereYear('created_at', $lastYear)
                ->whereMonth('created_at', $i)
                ->get(); // includes quantity in the products sold total

                $num = 0;

                foreach ($feb as $item) $num   =  $num + $item->quantity;// includes quantity in the products sold total



                $amountproductsold2023[$i] = $num ;




        }

        $totalsold2023= array_sum($amountproductsold2023);
        $totalsold2024= array_sum($amountproductsold2024); // gets total of products sold within that year

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


        $mostsoldCategory = ProductHistory::select('category')
        ->groupBy('category')
        ->orderByRaw('COUNT(*) DESC')
        ->limit(1)
        ->get("productname");
        $leastsoldCategory = ProductHistory::select('category')
        ->groupBy('category')
        ->orderByRaw('COUNT(*) ASC')
        ->limit(1)
        ->get("productname");


        $soldCategory = json_decode($mostsoldCategory, true);
        $leastcategory = json_decode($leastsoldCategory, true);

        $soldproduct = json_decode($mostsoldProduct, true);
        $leastproduct = json_decode($leastsoldProduct, true); // gets just the name of most and least sold product
        $avarage2024 = $totalsold2024 / 12;

        $avarage2023 = $totalsold2023 / 12; //


        $avarageToString = ($totalsold2024 - $totalsold2023) / $totalsold2023 *100; //gets the percentage increase between last year and this year

        if ($avarage2024 <= 0 || $avarage2023 <= 0) {

            $data->push(["Amount of products sold in $currentYear"], [$months], [$amountproductsold2024], ["Amount of products sold in $lastYear"], [$months], [$amountproductsold2023]);
            return $data;
        }
        $data->push(["Amount of products sold in $currentYear"], [$months], [$amountproductsold2024], ["Amount of products sold in $lastYear"], [$months], [$amountproductsold2023], ["Most sold product:"], [ $soldproduct[0]['productname']], ["Least sold product:"],[$leastproduct[0]['productname']] , ["Most sold category of product:"], [$soldCategory[0]['category']], ["Least sold category:"],[ $leastcategory[0]['category'] ], ["Total products sold in $currentYear:"], [ $totalsold2024],["Total sold in $lastYear"],[$totalsold2023],["Increase of products sold from $lastYear and $currentYear"],[ "$avarageToString%"]); // cretes a rows of stats for user

        return $data;

    }
}
