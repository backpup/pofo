<?php

use Illuminate\Database\Migrations\Migration;

class AddOrderColumn extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('projects', function($table){
			$table->integer('customOrder');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('projects', function($table){
			$table->dropColumn('customOrder');
		});
	}

}