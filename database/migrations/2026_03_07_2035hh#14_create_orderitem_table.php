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
        Schema::create('orderitem', function (Blueprint $table) {
            $table->bigIncrements('orderitemid')->unsigned();
            $table->unsignedBigInteger('productid');
            $table->foreign('productid')->references('productid')->on('products')->onDelete('cascade');
            $table->integer('quantity');
            $table->decimal('totalprice',8, 2);
            $table->unsignedBigInteger('orderid');
            $table->foreign('orderid')->references('orderid')->on('orders')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orderitem');
    }
};
