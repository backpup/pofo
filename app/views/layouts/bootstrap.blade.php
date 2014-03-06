<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>My Lab</title>
	{{ HTML::style('/bootstrap/css/screen.css') }}
	{{ HTML::style('/bootstrap/css/main.css') }}
</head>
<body>
	<div class="navbar navbar-default navbar-static-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<h2>Experiments</h2>
			</div><!--navbar-header-->
		</div><!--container-->
	</div><!--navbar-->
	
	@yield('content')

	<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	{{ HTML::script('/bootstrap/js/bootstrap.min.js') }}
	{{ HTML::script('/bootstrap/js/myscript.js') }}
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