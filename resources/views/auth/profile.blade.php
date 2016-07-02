@extends('templates.auth.master')

@section('title')
	{{ $user->name }} - AskAPro
@stop

@section('content')
	<h1>{{ $user->name }}</h1>
		
@stop