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


        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('stripeid')->unsigned();
            $table->unsignedBigInteger('orderid');
            $table->foreign('orderid')->references('orderid')->on('orders')->onDelete('cascade');
            $table->text('customerid');
            $table->text('paymentIntent');

            $table->text('status');
            $table->text('currency');
            $table->text('creation');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
