<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jenis_pakaians', function (Blueprint $table) {
            $table->id();
            $table->string("nama");
            $table->text("gambar_pakaian");
            $table->integer("harga_per_pcs");
            $table->integer("minimal_pemesanan");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jenis_pakaians');
    }
};