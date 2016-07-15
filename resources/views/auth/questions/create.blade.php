@extends('templates.auth.master')

@section('title')
	New Question - AskAPro
@stop

@section('content')
	<div class="new-question">
		<div class="header">
			<h1>New question</h1>
		</div>
		
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

				<div class="tabs">
					<ul class="tab-list">
						<li class="tab-li active">
							<a href="#body">Body</a>
						</li>
						<li class="tab-li">
							<a href="#preview">Preview</a>
						</li>

						<a href="http://commonmark.org/help/" target="_blank" class="markdown-banner">
							Markdown is supported
						</a>
					</ul>
					<div class="tab-content">
						<div class="tab-panel active" id="body">
							<div class="fieldset{{ $errors->has('body') ? ' error' : '' }}">
								<textarea name="body" id="body">{{ old('body') }}</textarea>
								
								@if($errors->has('body'))
									<span class="error-block">
										{{ $errors->first('body') }}
									</span>
								@endif
							</div>
						</div>
						<div class="tab-panel" id="preview">
							Type something in the textbox
						</div>
					</div>
				</div>
				
				@can('createPremiumQuestion', Auth::user())
					<div class="fieldset">
						<input type="checkbox" name="premium" id="premium"{{ old('premium') ? ' checked' : '' }} class="switch-input">
						<label for="premium" class="switch"></label>
						
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