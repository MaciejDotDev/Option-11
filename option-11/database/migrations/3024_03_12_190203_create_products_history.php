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
        Schema::create('products_history', function (Blueprint $table) {
            $table->bigIncrements('productsHistoryid')->unsigned();



            $table->unsignedBigInteger('productid')->nullable();
            $table->foreign('productid')->references('productid')->on('products');
            $table->string('productname');
            $table->string('category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction_history');
    }
};
