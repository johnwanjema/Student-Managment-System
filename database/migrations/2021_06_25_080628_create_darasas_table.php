<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDarasasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('darasas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('className');
            $table->string('classType');
            $table->integer('addedBy')->unsigned()->index();
            $table->foreign('addedBy')->references('id')->on('users');
            $table->string('status')->default('active');
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
        Schema::dropIfExists('darasas');
    }
}
