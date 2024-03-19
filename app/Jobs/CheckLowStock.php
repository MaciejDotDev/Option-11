<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\Wishlist;
use App\Notifications\LowStockNotification;
use Illuminate\Support\Facades\Notification;
use App\Models\Bikes;
use App\Models\Accessory;
use App\Models\Clothes;
use App\Models\BikePart;
use App\Models\RepairKit;

class CheckLowStock implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $userId;
    protected $itemId;
    protected $itemType;

    /**
     * Create a new job instance.
     *
     * @param int $userId 
     * @param int $itemId 
     * @param string $itemType 
     */
    public function __construct($userId, $itemId, $itemType)
    {
        $this->userId = $userId;
        $this->itemId = $itemId;
        $this->itemType = $itemType;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
        $model = $this->getModelForType($this->itemType);

        if (!$model) {
           
            return;
        }

        $item = $model::find($this->itemId);

     
        if ($item && $item->stock <= 5) {
            $user = \App\Models\User::find($this->userId);
           
            if ($user) {
                
                $notification = new LowStockNotification($item, $this->itemType);
                $user->notify($notification);
            }
        }
    }

    /**
     * Get the model for the given item type.
     *
     * @param string $type
     * @return string|null
     */
    protected function getModelForType($type)
    {
        $types = [
            'bike' => Bikes::class,
            'accessory' => Accessory::class,
            'clothing' => Clothes::class,
            'bikePart' => BikePart::class,
            'repairKit' => RepairKit::class,
        ];

        return $types[$type] ?? null;
    }
}
