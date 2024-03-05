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
        Schema::create('reviews', function (Blueprint $table) {
            $table->bigIncrements('reviewid')->unsigned();
            $table->unsignedBigInteger('userid');
            $table->foreign('userid')->references('userid')->on('users');
            $table->unsignedBigInteger('productid');
            $table->foreign('productid')->references('productid')->on('products');
            $table->string('title');
            $table->text('description');
            $table->integer('stars');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
