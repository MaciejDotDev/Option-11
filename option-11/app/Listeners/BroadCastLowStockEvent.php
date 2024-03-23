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

        $wishlist = Wishlist::where('productid',$event->productid)->where('userid',auth()->user()->userid)->first();
        if ($wishlist) {
            broadcast(new StockLowEvent($event->productid));

        } else {


        }

    }
}
