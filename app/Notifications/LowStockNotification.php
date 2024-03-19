<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class LowStockNotification extends Notification
{
    use Queueable;

    private $item;
    private $type;

    public function __construct($item, $type)
    {
        $this->item = $item;
        $this->type = $type;
    }

    public function via($notifiable)
    {
        return ['database']; 
    }

    public function toArray($notifiable)
    {
        return [
            'message' => "Low stock alert for {$this->type}: {$this->item->name}. Only {$this->item->stock} items left!",
            'item_id' => $this->item->id,
            'item_type' => $this->type,
        ];
    }
}

