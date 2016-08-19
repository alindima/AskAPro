<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('target')->unsigned();
            $table->foreign('target')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->integer('from')->unsigned();
            $table->foreign('from')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->text('message');
            $table->text('link');
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
        Schema::drop('notifications');
    }
}
