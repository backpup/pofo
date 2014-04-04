<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{ $title }}</title>
	{{ HTML::style('/assets/css/screen.css') }}
	{{ HTML::script('/assets/js/pace.min.js') }}
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	
</head>
<body>

<div class="wrapper">

<header>
		<h1 id="myInitials">
		<span class="header-hero">P</span>
		<span class="header-sidekick">R</span>

		</h1>

	<nav id="mainNav" role="navigation">
		<ul>
			<li>{{ HTML::link('/', 'Home', array('class'=>"mainLink"))}}</li>
			<li><a href="#" class="mainLink">Portfolio</a></li>
			<li><a href="#" class="mainLink">Contact</a></li>
		</ul>
	</nav>
</header>


	@yield('content')

<footer>
		&copy; PRAVIN RAI {{ date('Y') }}
</footer>
</div> <!-- close wrapper -->
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
{{ HTML::script('/assets/js/project.min.js') }}
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48713716-1', 'raipravin.com');
  ga('send', 'pageview');
</script>
</body>
</html>