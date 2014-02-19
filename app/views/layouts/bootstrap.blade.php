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
</body>
</html>