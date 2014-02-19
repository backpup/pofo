<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

App::missing(function($exception)
{
	return Response::view('projects.missing', array(), 404);
});

Route::get('/', array('as'=>'home', 'uses'=>'ProjectsController@getIndex'));

Route::get('profile', function(){
	return View::make('projects.profile')
		->with('title', 'About me');
});
Route::get('contact', function(){
	return View::make('projects.contact')
		->with('title', 'Contact me');
});

Route::get('lab', function(){
	return View::make('labs.lab');
});


Route::post('contact', array('uses'=>'ProjectsController@postContactMe'));


// Route::get('test', function(){
// 	return Project::getAll();
// });