@extends('templates.auth.master')

@section('title')
	My Questions - AskAPro
@stop

@section('content')
	<div class="my-questions">
		<div class="header">
			<h1>My questions</h1>
		</div>

		<div class="main">
			@include('templates.partials.questions', ['questions' => $questions])

			<div class="pagination">{{ $questions->links() }}</div>
		</div>
	</div>
@stop