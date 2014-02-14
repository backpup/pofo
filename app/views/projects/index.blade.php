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

		</div>  <!--project-outer-->


	@endforeach
</section> <!-- home end -->
@endsection