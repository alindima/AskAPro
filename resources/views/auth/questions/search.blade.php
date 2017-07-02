@extends('templates.auth.master')

@section('title')
	Search - AskAPro
@stop

@section('content')
	<div class="search">
		<div class="form">
			<form action="{{ $tag->exists ? route('questions.search', $tag->name) : route('questions.search') }}" method="get" autocomplete="off">
				<label for="search">
					<i class="fa fa-search"></i>
				</label>
				<input type="text" name="s" placeholder="Search through all questions.." id="search" value="{{ request()->has('s') ? request()->input('s') : '' }}">
			</form>
		</div>

		<div class="tags-box">
			<h3>Pick a tag</h3>
			<ul>
				@foreach($tags as $t)
					@if($tag == $t)
						<li class="active">
							<a href="{{ route('questions.search') }}">{{ $t->name }}</a>
						</li>
					@else
						<li>
							<a href="{{ route('questions.search', $t->name) }}">{{ $t->name }}</a>
						</li>
					@endif
				@endforeach
			</ul>
		</div>

		<div class="main">
			@if(!empty($questions))
				@include('templates.partials.questions', ['questions' => $questions])
				
				<div class="pagination">{{ $questions->links() }}</div>
			@endif
		</div>
	</div>
@stop