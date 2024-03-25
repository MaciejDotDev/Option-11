<?php

namespace App\Listeners;

use App\Events\StockLowEvent;
use App\Models\Wishlist;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class BroadCastLowStockEvent
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(StockLowEvent $event): void
    {

        if (auth()->check()) {

            $userId = auth()->id();


            if ($event->productid) {
                // Check if the product exists in the user's wishlist
                $wishlist = Wishlist::where('productid', $event->productid)
                                    ->where('userid', $userId)
                                    ->first();

                // If the product exists in the user's wishlist, broadcast the event
                if ($wishlist) {
                    broadcast(new StockLowEvent($event->productid));
                }
            }
        }
    }
}
