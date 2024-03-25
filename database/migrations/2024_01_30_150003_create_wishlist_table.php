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
        Schema::create('wishlist', function (Blueprint $table) {
            $table->BigIncrements('wishlistid')->unsigned();

            $table->unsignedBigInteger('userid');
            $table->foreign('userid')->references('userid')->on('users')->onDelete('cascade');


             $table->unsignedBigInteger('productid');
            $table->foreign('productid')->references('productid')->on('products')->onDelete('cascade');

            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wishlist');
    }
};
