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
        Schema::create('clothes', function (Blueprint $table) {
            $table->bigIncrements('clothingid')->unsigned();
            $table->unsignedBigInteger('productid');
            $table->foreign('productid')->references('productid')->on('products')->onDelete('cascade');
            $table->string('category');
            $table->char('colour');
            $table->char('size');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clothes');
    }
};
