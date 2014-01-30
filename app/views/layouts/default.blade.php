<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>{{ $title }}</title>
	<link rel="stylesheet" href="">
	{{ HTML::style('/assets/css/screen.css') }}
</head>
<body>
<div class="wrapper">
	<header>
		<h1 id="mainHeader">
		<span class="header-hero">P</span>
		<span class="header-sidekick">R</span>
		</h1>
	</header>
	<nav id="mainNav">
		<ul>
			<li>{{ HTML::link('/', 'Home')}}</li>
			<li>{{ HTML::link('profile', 'Profile')}}</li>
			<li>{{ HTML::link('contact', 'Contact') }}</li>
		</ul>
	</nav>

	@yield('content')
	<footer>
		&copy; PRAVIN RAI 2013
	</footer>
</div> <!-- close wrapper -->
</body>
</html>