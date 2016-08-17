@extends('templates.auth.master')

@section('title')
	Dashboard - AskAPro
@stop

@section('content')
	<div class="dashboard">
		<div class="header">
			<h1>Question feed</h1>
		</div>
		<div class="main">
			@include('templates.partials.questions', ['questions' => $questions])

			<div class="pagination">{{ $questions->links() }}</div>
		</div>
	</div>
@stop