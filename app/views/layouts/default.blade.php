<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>{{ $title }}</title>
	{{ HTML::style('/assets/css/screen.css') }}
	{{ HTML::script('/assets/js/jquery.js') }}
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
			<li>{{ HTML::link('/', 'Home')}}</li>
			<li>{{ HTML::link('profile', 'Profile')}}</li>
			<li>{{ HTML::link('contact', 'Contact') }}</li>
			<li>{{ HTML::link('test', 'Test') }}</li>
		</ul>
	</nav>
</div>
</section>

	@yield('content')
	<footer>
		&copy; PRAVIN RAI {{ date('Y') }}
	</footer>
</div> <!-- close wrapper -->

{{ HTML::script('/assets/js/test.js') }}
</body>
</html>