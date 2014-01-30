<?php 

class ProjectsController extends BaseController{

	public function getIndex()
	{
		return View::make('projects.index')
			->with('title', 'Pravin Projects Home')
			->with('projects', Project::getAll());
	}


}


 ?>