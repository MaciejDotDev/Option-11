<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('refunds', function (Blueprint $table) {
            $table->bigIncrements('refundid')->unsigned();
            $table->unsignedBigInteger('orderitemid');


            $table->foreign('orderitemid')->references('orderitemid')->on('orderitem');
            $table->unsignedBigInteger('userid');

            $table->foreign('userid')->references('userid')->on('users')->onDelete('cascade');
            $table->integer('quantity');
            $table->text('reason_refund');
            $table->boolean('is_refunded');
            $table->decimal('totalprice');
            $table->enum('status', ['dispatched', 'delivered', 'refunded']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('refunds');
    }
};
