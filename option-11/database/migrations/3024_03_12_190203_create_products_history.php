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
            $table->string('productname');
            $table->string('category');
            $table->integer('quantity');
            $table->enum('status', ['deleted','avalible']);
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
