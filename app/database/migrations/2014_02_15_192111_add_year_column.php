<?php

use Illuminate\Database\Migrations\Migration;

class AddYearColumn extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('projects', function($table){
			$table->string('year');
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
			$table->dropColumn('year');
		});
	}

}