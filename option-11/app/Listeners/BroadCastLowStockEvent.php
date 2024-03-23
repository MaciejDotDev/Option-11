<?php

namespace App\Listeners;

use App\Events\StockLowEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class BroadCastLowStockEvent implements ShouldQueue // we're setting up a listerr that triggers events if the condition in the model returns a event
{
    /**
     * Create the event listener.
     */
    use InteractsWithQueue;
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(StockLowEvent $event): void
    {
        //
    }
}
