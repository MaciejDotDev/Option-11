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
        Schema::create('repairkits', function (Blueprint $table) {
            $table->bigIncrements('repairkitsid')->unsigned();
            $table->string('productname');
            $table->string('description');
            $table->decimal('price', 8, 2);
            $table->integer('stockquantity');
            $table->string('imageURL');
            $table->string('category');
            $table->string('CompatibleWithType');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repairkits');
    }
};
