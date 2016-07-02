@extends('templates.auth.master')

@section('title')
	Edit profile - AskAPro
@stop

@section('content')
	<h1>{{ Auth::user()->getName() }} - Edit profile</h1>
@stop