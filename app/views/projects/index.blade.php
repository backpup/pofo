@extends('layouts.default')


@section('content')
<div id="banner">
	<h3>Hi</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, itaque.</p>
</div>
<section class="home">
	@foreach($projects as $project)
	
		<div class="projects">
			<img src="" alt="">
			<h2>{{ $project->title }}</h2>
			<span class="type">{{ $project->type }}</span>
			<p>{{ $project->description }}</p>
			<a href="#">Link</a>
		</div>

	@endforeach
</section> <!-- home end -->
@endsection