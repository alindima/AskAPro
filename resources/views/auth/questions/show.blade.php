@extends('templates.auth.master')

@section('title')
	{{ $question->title }} - AskAPro
@stop

@section('content')
	<div class="show-question">
		<div class="header">
			<div class="top">
				<div class="user-profile">
					<img src="{{ $question->user->getProfilePicture() }}" alt="{{ $question->user->getName() }}">
					<div class="user-name">
						<a href="{{ route('profile', $question->user->name) }}">
							{{ $question->user->getName() }}
						</a>
					</div>
				</div>

				@can('update', $question)
					<div class="settings">
						<input type="checkbox" name="" id="settings-checkbox" class="hidden">
						<label for="settings-checkbox" class="settings-button">
							<i class="fa fa-cog" aria-hidden="true"></i>
						</label>

						<div class="settings-drop">
							<div class="setting question-edit">
								<a href="{{ route('question.edit', $question->slug) }}">
									<i class="fa fa-pencil" aria-hidden="true"></i>
									Edit question
								</a>
							</div>
							<div class="setting question-delete">
								<form action="{{ route('question.show', $question->slug) }}" method="post">
									{{ csrf_field() }}

									<input type="hidden" name="_method" value="delete">

									<button type="submit"><i class="fa fa-trash" aria-hidden="true"></i> Delete question</button>
								</form>
							</div>
						</div>
					</div>
				@endcan
			</div>

			<div class="question-title">
				<h1>{{ $question->title }}</h1>
			</div>
			<div class="question-timestamps">
				{{ $question->created_at->diffForHumans() }}
			</div>
			<div class="question-tags">
				<ul class="tags">
					@foreach($question->tags as $tag)
						<li>{{ $tag->name }}</li>
					@endforeach
				</ul>
			</div>
		</div>
		
		<div class="main">
			{!! parsedown($question->body) !!}
		</div>

		<div class="footer">
			
		</div>
	</div>
			
@stop