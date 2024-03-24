<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared('
            CREATE EVENT delete_old_records
            ON SCHEDULE EVERY 5 DAY
            DO
            BEGIN
                DELETE FROM stock_alert_event WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);
            END
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP EVENT IF EXISTS delete_old_records');
    }
};
