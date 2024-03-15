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
        Schema::create('products_parts_compatibility', function (Blueprint $table) {
            $table->bigIncrements('partscompatibilityid');

            $table->unsignedBigInteger('bikepartsid');
            $table->foreign('bikepartsid')->references('bikepartsid')->on('bikeparts')->onDelete('cascade');
            $table->unsignedBigInteger('bikeid');
            $table->foreign('bikeid')->references('bikeid')->on('bikes')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_parts_compaability');
    }
};
