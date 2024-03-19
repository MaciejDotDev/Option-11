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
        Schema::create('baskets', function (Blueprint $table) {
            $table->bigIncrements('basketid')->unsigned();

            $table->unsignedBigInteger('userid');
            $table->foreign('userid')->references('userid')->on('users')->onDelete('cascade');


            $table->unsignedBigInteger('bikeid')->nullable();
            $table->foreign('bikeid')->references('bikeid')->on('bikes')->onDelete('cascade');
            



            $table->unsignedBigInteger('accessoryid')->nullable();
            $table->foreign('accessoryid')->references('accessoryid')->on('accessories')->onDelete('cascade');

            $table->unsignedBigInteger('clothingid')->nullable();
            $table->foreign('clothingid')->references('clothingid')->on('clothes')->onDelete('cascade');
            

            
            $table->unsignedBigInteger('bikepartsid')->nullable();
            $table->foreign('bikepartsid')->references('bikepartsid')->on('bikeparts')->onDelete('cascade');

            
            $table->unsignedBigInteger('repairkitsid')->nullable();
            $table->foreign('repairkitsid')->references('repairkitsid')->on('repairkits')->onDelete('cascade');

            $table->integer('quantity');

            $table->decimal('totalprice');

            $table->enum('status', ['open', 'closed']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('basket_tablee');
    }
};
