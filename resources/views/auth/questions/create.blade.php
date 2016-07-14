@extends('templates.auth.master')

@section('title')
	New Question - AskAPro
@stop

@section('content')
	<div class="new-question">
		<div class="form">
			<form action="{{ route('question.create') }}" method="post">
				<div class="fieldset{{ $errors->has('title') ? ' error' : '' }}">
					<label for="title">Title</label>
					<input type="text" name="title" id="title" value="{{ old('title') }}">
					
					@if($errors->has('title'))
						<span class="error-block">
							{{ $errors->first('title') }}
						</span>
					@endif
				</div>

				<div class="fieldset{{ $errors->has('body') ? ' error' : '' }}">
					<label for="body">Body</label>
					<textarea name="body" id="body">{{ old('body') }}</textarea>
					
					@if($errors->has('body'))
						<span class="error-block">
							{{ $errors->first('body') }}
						</span>
					@endif
				</div>
				
				@can('createPremiumQuestion', Auth::user())
					<div class="fieldset">
						<input type="checkbox" name="premium" id="premium"{{ old('premium') ? ' checked' : '' }}>
						<label for="premium">I want a pro to answer this question</label>
					</div>
				@endcan
								
				{{ csrf_field() }}

				@include('templates.partials.bot_input')

				<button type="submit" class="button">
					Submit question
				</button>
			</form>
		</div>
	</div>
@stop