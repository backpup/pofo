@extends('layouts.default')


@section('content')
<div id="banner">
	<div class="inner-intro">
	<h1>Hi,</h1><h1> Thanks for Visiting</h1>
	<p>I'm Pravin Rai and I'm a Web Developer.</p>
	</div>
	<div class="inner-logo">
	</div>
	<div class="inner-expertise">
	<h2>What i do</h2>
		<div class="skill-list">
			<div class="skills">
				<i class="fa fa-html5 fa-3x"></i>
			</div>
			<div class="skills">
				<i class="fa fa-css3 fa-3x"></i>
			</div>
			<div class="skills">
				<i class="fa fa-code fa-3x"></i>
			</div>
			<div class="skills">
				<img src="assets/img/jquery.png">
			</div>
			<div class="skills php">
				<!-- <img src="assets/img/php.png"> -->
			</div>
			<div class="skills laravel">
				<img src="assets/img/laravelfour.png">
			</div>
			<div class="skills">
				<i class="fa fa-linux fa-3x"></i>
			</div>
			<div class="skills">
				<i class="fa fa-github fa-3x"></i>
			</div>
		</div>
	</div>
	
</div>
<section class="home">
	@foreach($projects as $project)
		
		<div class="project-outer">
			<div class="addbar">
				<div class="circle red"></div>
				<div class="circle yellow"></div>
				<div class="circle green"></div>
				<a class = "addressBar" href="http://weddingsite.raipravin.com">http://weddingsite.raipravin.com</a>
			</div>
			<div class="project-info">
				<h2>Wedding Site</h2>
				<p>My first ever web project and what got me into web development. It involved lot of googling, youtubing and scrambling for ideas, but I was so happy when I was done, and surprised and proud that it came out looking decent. <span>(p.s. might have gone overboard with animations)</span></p>

				<h3>2012</h3>
				<a href=""><h3>Visit</h3></a>
			</div>
			<img src="assets/img/dd.jpg" alt="">
			
			<span class="type">{{ $project->type }}</span>
			
		<!-- 	<a href="#">Link</a> -->

		</div>  <!--project-outer-->


	@endforeach
</section> <!-- home end -->
@endsection