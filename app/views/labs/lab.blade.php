@extends('layouts.bootstrap')

@section('content')


<div class="container">

	<div class="panel panel-info ">
		<div class="panel-heading">
			<h2 class="panel-title">Hello there</h2>
		</div>
		<div class="panel-body">
		<p>Here you will find stuff I created as an experiment or because I had need for it at one point or another. Trivial bits of code that probably won't be of any use to most. Decided to leave it here just in case someone finds use for it as I had at one point.</p>

	</div><!--panel-->
	</div>
	<div class="page-header">
		<h4>VLC playlist generator</h4>
	</div>
	<div class="well">
		<p>If you've ever needed to play a video for a presentation or other occasions where you needed to skip around, there's only two options available; either do it manually or use a video editing software. But editing seems like an overkill if you don't care for fancy transitions and don't mind abrupt jumps during the play. If you use vlc player, with some trivial editing of the playlist you can just play the same video over and over with different start and end point specified and won't have to skip around manually. This playlist generator will help you do that</p>
	</div>
	<div class="row">
	<div class="app">
	<section class="playlist-generator">
		<div class="col-md-8 col-md-offset-2">
			<label for ="fileLocation">File Location:</label>&nbsp;&nbsp;<a href="#" id="instruction">How to get it</a>
			<input type="text" id="fileLocation" class="form-control" placeholder="location of file goes here"/>

			<p class="pull-right">
			<button type="button" id="addIntervalBtn" class="btn btn-primary">Add More Intervals</button>
			</p>
		</div>
		<div class="row clear">
		<div class="intervalLabel col-md-6 col-xs-6"><h3>Start Time</h3></div>
		<div class="intervalLabel col-md-6 col-xs-6"><h3>End Time</h3></div>
		</div>
		<div class=" new col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
			<button type="button" class="close" aria-hidden="true">&times;</button>
			<div class="col-md-2 col-sm-2 col-xs-2">
				<label for ="">Hour</label>
				<div class="input-group">
					<input type="text" class="form-control hour" placeholder="00">
				</div>
			</div>
			<div class="col-md-2 col-sm-2 col-xs-2">
			<label for ="">Minutes</label>
				<div class="input-group">
					<input type="text" class="form-control minutes" placeholder="00">
				</div>
			</div>
				<div class="col-md-2 col-sm-2 col-xs-2">
			<label for ="">Seconds</label>
				<div class="input-group">
		
					<input type="text" class="form-control seconds" placeholder="00">
				</div>
			</div>

			<div class="col-md-2 col-sm-2 col-xs-2">
			<label for ="">Hour</label>
				<div class="input-group">
		
					<input type="text" class="form-control hour" placeholder="00">
			</div>
			</div>
			<div class="col-md-2 col-sm-2 col-xs-2">
			<label for ="">Minutes</label>
				<div class="input-group">
			
					<input type="text" class="form-control minutes" placeholder="00">
			</div>
			</div>
			<div class="col-md-2 col-sm-2 col-xs-2">
			<label for ="">Seconds</label>
				<div class="input-group">

					<input type="text" class="form-control seconds" placeholder="00">
			</div>
			</div>
		</div><!--new-->
	</section>
	<section class="playlist-calculator">
		<div class="col-md-8 col-md-offset-2">
			<button type="button" id="calculateBtn" class="btn btn-success">Calculate</button>
			<button type="button" id="clearBtn" class="btn btn-success">Clear Result</button>
			<textarea class="form-control" id="result" rows="15"></textarea>
			<div class="alert alert-success">Save the result of your calculation using a text editor in .xspf format. &lt;Your desired filename&gt;.xspf</div>
		</div>

	</section>
</div> <!--app-->
	</div><!--row-->

</div><!--container-->


@endsection
