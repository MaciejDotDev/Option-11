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
        Schema::create('clothings', function (Blueprint $table) {
            $table->id();
            $table->string('image_URL');
            $table->string('name');
            $table->text('description');
            $table->decimal('price', 8, 2);
            $table->decimal('stockavailabilty', 6,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clothings');
    }
};
