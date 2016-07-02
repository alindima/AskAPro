@extends('templates.auth.master')

@section('title')
	Account settings - AskAPro
@stop

@section('content')
	<h1>{{ Auth::user()->name }} - Account Settings</h1>
@stop