<?php 

class Project extends Eloquent{

	public static function getAll()
	{
		return static::where('customOrder', '>', 0)
		->orderBy('customOrder')->get();
	}
}






 ?>