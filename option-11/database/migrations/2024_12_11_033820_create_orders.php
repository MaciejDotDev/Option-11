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
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('ordersid')->unsigned();
            $table->unsignedBigInteger('userid');
            $table->foreign('userid')->references('userid')->on('users');

            $table->unsignedBigInteger('orderitemid');
            $table->foreign('orderitemid')->references('orderitemid')->on('orderitem');
            $table->string('trackingcode')->nullable();


            $table->unsignedBigInteger('addressid')->nullable();
            $table->foreign('addressid')->references('addressid')->on('address');

            $table->decimal('totalprice',8, 2);
            $table->enum('status', ['paid', 'dispatched', 'delivered']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
