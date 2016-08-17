@extends('templates.auth.master')

@section('title')
	My unsolved questions - AskAPro
@stop

@section('content')
	<div class="dashboard">
		<div class="header">
			<h1>My unsolved questions</h1>
		</div>
		
		<div class="main">
			@include('templates.partials.questions', ['questions' => $questions])

			<div class="pagination">{{ $questions->links() }}</div>
		</div>
	</div>
@stop