<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>My Lab</title>
	{{ HTML::style('/bootstrap/css/screen.css') }}
	{{ HTML::style('/bootstrap/css/main.css') }}
	{{ HTML::script('/bootstrap/js/jquery.js') }}
</head>
<body>
	<div class="navbar navbar-default navbar-static-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<h2>My experiments</h2>
			</div><!--navbar-header-->
		</div><!--container-->
	</div><!--navbar-->
	
	@yield('content')


	{{ HTML::script('/bootstrap/js/bootstrap.min.js') }}
	{{ HTML::script('/bootstrap/js/myscript.js') }}
</body>
</html>