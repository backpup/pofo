@extends('layouts.default')

@section('content')
<div class="mainContact">
<h2>Hello</h2>

@if(Session::has('appMsg'))
<div class="appMessage">
	 <p>{{ Session::get('appMsg') }}</p>
</div>
@endif
@if($errors->has())
<div class = "appMessage">
	<p>The following errors have occured</p>
	<ul id="form-errors">
		{{ $errors->first('name', '<li>:message</li>' )}}
		{{ $errors->first('email', '<li>:message</li>' )}}
		{{ $errors->first('message', '<li>:message</li>' )}}
	</ul>
</div>
@endif


{{ Form::open(array('url'=>'contact', 'id'=>'contactForm')) }}

	{{ Form::label('name', 'Name:') }}
	<div class="input-group">
	<span class="input-group-addon"><i class="fa fa-user fa-fw"></i></span>
	{{ Form::text('name', '', array('tabindex'=>10)) }}
		</div>
	
	{{ Form::label('email', 'Email:') }}
	<div class="input-group">
	<span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span>
	{{ Form::email('email', '', array('tabindex'=>20)) }}<br />
	</div>


	{{ Form::label('message', 'Message:') }}
	{{ Form::textarea('message', '', array('rows'=>5, 'tabindex'=>30)) }}


	{{ Form::submit('send') }}
{{ Form::close() }}
</div>
@endsection