@extends('templates.master')

@section('title')
	Dashboard - AskAPro
@stop

@section('content')
	Hello {{ Auth::user()->name }}
@stop