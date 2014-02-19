<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{ $title }}</title>
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	{{ HTML::style('/assets/css/screen.css') }}
	<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
</head>
<body>

<div class="wrapper">
<section id="top">

<div id="navBar">
	<header id="header">
		<h1 id="mainHeader">
		<span class="header-hero">P</span>
		<span class="header-sidekick">R</span>

		</h1>
	</header>
	<nav id="mainNav">
		<ul>
			<li>{{ HTML::link('/', 'Home', array('class'=>"mainLink"))}}</li>
			<li><a href="#" class="mainLink">Portfolio</a></li>
			<li><a href="#" class="mainLink">Contact</a></li>
		</ul>
	</nav>

</div>

</section>

	@yield('content')
	<footer>
		&copy; PRAVIN RAI {{ date('Y') }}
	</footer>
</div> <!-- close wrapper -->

{{ HTML::script('/assets/js/project.min.js') }}
</body>
</html>