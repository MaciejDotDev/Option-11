<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stock_alert_event', function (Blueprint $table) {
            $table->bigIncrements('stock_alert_id')->unsigned();
            $table->unsignedBigInteger('wishlistid');
            $table->foreign('wishlistid')->references('wishlistid')->on('wishlist')->onDelete('cascade');
            $table->unsignedBigInteger('userid');
            $table->foreign('userid')->references('userid')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_alert_event');
    }
};
