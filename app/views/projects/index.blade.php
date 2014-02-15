@extends('layouts.default')


@section('content')
<div id="banner">
	<div class="inner-intro">
	<h1>Hi,</h1><h1> Thanks for Visiting</h1>
	<p>I'm Pravin Rai and I'm passionate about web development</p>
	</div>
<!-- 	<div class="inner-logo">
		<div class="logo current-logo">
			<i class="fa fa-html5 fa-5x"></i>
		</div>
		<div class="logo logo-info">
			<i class="fa fa-code fa-5x"></i>
		</div>
	</div> -->
	<div class="inner-expertise">
	<h2>What i use <i class="fa fa-chevron-right fa-fw"></i></h2><p id="hook"></p>
		<div class="skill-list">
			<div class="skills" data-name="html">
				<i class="fa fa-html5 fa-3x"></i>
			</div>
			<div class="skills" data-name="css">
				<i class="fa fa-css3 fa-3x"></i>
			</div>
			<div class="skills" data-name="javascript">
				<i class="fa fa-code fa-3x"></i>
			</div>
			<div class="skills jquery" data-img="jquery" data-name="jquery">
	
			</div>
			<div class="skills php" data-img="php" data-name="php">
	
			</div>
			<div class="skills laravel" data-img="laravel" data-name="laravel">
		
			</div>
			<div class="skills" data-name="linux">
				<i class="fa fa-linux fa-3x"></i>
			</div>
			<div class="skills" data-name="github">
				<i class="fa fa-github fa-3x"></i>
			</div>
		</div><!--skill-list end-->
	</div><!--inner-expertise end-->
	
</div>
<!-- <div class="sectionDivider"></div> -->
<div class="homeWrapper">
<section class="home">
	@foreach($projects as $project)
		
		<div class="project-outer">
			<div class="addbar">
				<div class="circle red"></i></div>
				<div class="circle green"></div>
				<div class="circle yellow"></div>
				<a class = "addressBar" href="{{ $project->projectLink }}">{{ $project->projectLink }}</a>
			</div>
			<div class="project-info">
				<h2>{{ $project->title }}</h2>
				<p>{{ $project->description }}</p>

				<h3>{{ $project->year }}</h3>
				<a href="{{ $project->projectLink }}"><h3>Visit</h3></a>
			</div>
			<img src="assets/img/{{ $project->imageLink }}" alt="">
			
			<!-- <span class="type">{{ $project->type }}</span> -->

		</div>  <!--project-outer-->


	@endforeach
		
</section> <!-- home end -->
</div>
<div class="divider">
	<h1 class="intro">Want to say hi?</h1>
	<h1 class="info">Get in Touch with me</h1>
</div>

<div class="mainContact">

@if(Session::has('appMsg'))
<div class="appMessage">
	 <p>{{ Session::get('appMsg') }}</p>
</div>
@endif
@if($errors->has())
<div id = "appMessage">
	<p>The following errors have occured</p>
	<ul id="form-errors">
		{{ $errors->first('name', '<li>:message</li>' )}}
		{{ $errors->first('email', '<li>:message</li>' )}}
		{{ $errors->first('message', '<li>:message</li>' )}}
	</ul>
</div>
@endif

<div class="formContainer">
{{ Form::open(array('url'=>'contact', 'id'=>'contactForm')) }}

	{{ Form::label('name', 'Name:') }}
	<div class="input-group">
	<span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
	{{ Form::text('name', '', array('tabindex'=>10)) }}
		</div>
	
	{{ Form::label('email', 'Email:') }}
	<div class="input-group">
	<span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span>
	{{ Form::email('email', '', array('tabindex'=>20)) }}<br />
	</div>


	{{ Form::label('message', 'Message:') }}
	{{ Form::textarea('message', '', array('rows'=>8, 'tabindex'=>30)) }}


	{{ Form::submit('send') }}
{{ Form::close() }}
</div><!--End form container-->
</div>
@endsection