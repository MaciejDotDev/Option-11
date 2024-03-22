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
    Schema::create('products', function (Blueprint $table) {
        $table->id('productid');
        $table->string('productname');
        $table->decimal('price', 8, 2);
        $table->text('description');
        $table->string('imageURL');
        $table->unsignedBigInteger('categoryid');
        $table->foreign('categoryid')->references('categoryid')->on('categories')->onDelete('cascade');
        $table->integer('stockquantity');
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
