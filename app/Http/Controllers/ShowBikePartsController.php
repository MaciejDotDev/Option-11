<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ManageBasketController;
use App\Models\BikePart;
use App\Models\Reviews;
use Inertia\Inertia;

class ShowBikePartsController extends ManageBasketController
{
    /**
     * Show all bike parts.
     *
     * @return \Inertia\Response
     */
    public function showAll()
    {
        // Retrieve all bike parts whose product name contains the word "frame"
        $bikeParts = BikePart::with('products')->get();

        return Inertia::render('BikeParts', ['bikeParts' => $bikeParts]);
    }

    /**
     * Search bike parts.
     *
     * @return \Illuminate\Http\Response
     */
    public function search()
    {
        // Retrieve all bike parts whose product name contains the word "frame"
        $bikeParts = BikePart::with('products')->get();

        return response()->json($bikeParts);
    }

    /**
     * Show an individual bike part.
     *
     * @param  int  $productid
     * @return \Inertia\Response
     */
    public function showIndividual($productid)
    {
        $bike = BikePart::with('products')->where('productid', $productid)->first();

        $reviews = Reviews::with('user')->where('productid', $productid)
            ->orderBy('created_at', 'DESC')
            ->get();

        $stars = Reviews::where('productid', $productid)->get();

        $starTotal = $stars->pluck('stars')->toArray();
        $starsAvg = $starTotal ? round(array_sum($starTotal) / count($starTotal), 1) : null;
        $commentsCount = count($stars);

        return Inertia::render('ShowBikePartPage', [
            'product' => $bike,
            'reviews' => $reviews,
            'starsAvg' => $starsAvg,
            'commentsCount' => $commentsCount
        ]);
    }
}
?>
