<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Excel;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Carbon\Carbon;
use Illuminate\Support\Collection;
class UsersStatsExport implements FromCollection, Responsable
{
    /**
    * @return \Illuminate\Support\Collection
    */

    use Exportable;

    /**
    * It's required to define the fileName within
    * the export class when making use of Responsable.
    */
    private $fileName = 'users.xlsx';

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


        $amountUsers2024 = [];
        $amountUsers2023 = [];

        $months = [];

        $currentYear = Carbon::now()->year;
        $lastYear = Carbon::now()->year - 1;



        for ($m=1; $m<=12; $m++) {
            $months[] = date('F', mktime(0,0,0,$m, 1, date('Y')));
        }

        for ($i = 1; $i <= 12; $i++) {
            $jan =User::whereYear('created_at',$currentYear)
            ->whereMonth('created_at', $i)
            ->get()->count();
            $amountUsers2024[$i] =$jan;


             // Add your custom values to the collection
        }
        for ($i = 1; $i <= 12; $i++) {
            $jan = User::whereYear('created_at', $lastYear)
            ->whereMonth('created_at', $i)
            ->get()->count();
            $amountUsers2023[$i] =$jan;


             // Add your custom values to the collection
        }





        $avarage2024 = array_sum($amountUsers2024)/12;

        $avarage2023 = array_sum($amountUsers2023)/12;

        if ($avarage2024 == 0 || $avarage2023  == 0) {

            $data->push(["Amount of created accounts in $currentYear"],[$months],[$amountUsers2024],["Amount of created accounts in $lastYear"], [$months],[$amountUsers2023]);
            return $data;
        }


        $stringNumber = (($avarage2024 - $avarage2023) / $avarage2023) * 100;

        $data->push(["Amount of created accounts in $currentYear"],[$months],[$amountUsers2024],["Avarage user account creation"],[$avarage2024],["Amount of created accounts in $lastYear"], [$months],[$amountUsers2023], ["Avarage user account creation"],[$avarage2023], ["Ammount of accounts increase betweeen  $currentYear and  $lastYear"], ["$stringNumber%"]);



        return $data;
    }
}
