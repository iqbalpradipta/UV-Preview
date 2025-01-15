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
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('price');
            $table->integer('stock');
            $table->string('image');
            $table->string('type');
            $table->unsignedBigInteger('categoriesId');
            $table->unsignedBigInteger('promotionId');
            $table->unsignedBigInteger('brandId');
            $table->timestamps();

            $table->foreign('categoriesId')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('promotionId')->references('id')->on('promotions')->onDelete('cascade');
            $table->foreign('brandId')->references('id')->on('brands')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vouchers');
    }
};
