<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('bikes', function (Blueprint $table) {
        $table->bigIncrements('bikeid')->unsigned();
        $table->unsignedBigInteger('productid');
        $table->foreign('productid')->references('productid')->on('products')->onDelete('cascade');
        $table->string('category');
        $table->string('colour');
        $table->string('size');

        $table->timestamps();


    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bikes');
    }
};
