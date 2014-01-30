@extends('layouts.default')

@section('content')
<div class="mainContact">
<h2>Hello</h2>
{{ Form::open(array('url'=>'contact', 'id'=>'contactForm')) }}

	{{ Form::label('name', 'Name:') }}
	{{ Form::text('name', '', array('tabindex'=>10)) }}


	{{ Form::label('email', 'Email:') }}
	{{ Form::email('email') }}<br />



	{{ Form::label('message', 'Message:') }}
	{{ Form::textarea('message', '', array('rows'=>5)) }}


	{{ Form::submit('send') }}
{{ Form::close() }}
</div>
@endsection