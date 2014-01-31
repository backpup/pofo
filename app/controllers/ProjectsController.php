<?php 

class ProjectsController extends BaseController{

	public function __construct()
	{
		$this->beforeFilter('csrf',array('on'=>'post'));
	}

	public function getIndex()
	{
		return View::make('projects.index')
			->with('title', 'Pravin Projects Home')
			->with('projects', Project::getAll());
	}

	public function postContactMe()
	{
		$data = Input::all();

		$rules = array(
			'name'	=>'required|max:60|alpha_num',
			'email'	=>'email|required',
			'message'=>'required|max:2048'
		);

		$validator = Validator::make($data, $rules);

		if($validator->passes())
		{
			$mailData = array(
				'name'=>Input::get('name'),
				'email'=>Input::get('email'),
				'msg'=>Input::get('message')
			);
			/*basically the message is conflicting with mail class's message object
			that's why I'm creating mailData, else everything would've been peachy*/

			Mail::send('emails.general', $mailData, function($message)
			{
				$message->to('ikiratrai@gmail.com', 'Gao')->subject('You cool');

			});
			return Redirect::to('contact')
				->with('appMsg', 'Thanks, will get in touch soon');
		}else{
			return Redirect::to('contact')->withErrors($validator)->withInput();
		}

	}


}


 ?>