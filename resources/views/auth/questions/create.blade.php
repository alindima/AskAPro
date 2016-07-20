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
			<form action="{{ route('question.create') }}" method="post" autocomplete="off">
				<div class="fieldset{{ $errors->has('title') ? ' error' : '' }}">
					<label for="title">Title</label>
					<input placeholder="e.g. How to sort an array in php" type="text" name="title" id="title" value="{{ old('title') }}">
					
					@if($errors->has('title'))
						<span class="error-block">
							{{ $errors->first('title') }}
						</span>
					@endif
				</div>

				<div class="tabs preview-tabs">
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
								<textarea name="body" id="body" placeholder="Describe your problem here...">{{ old('body') }}</textarea>
								
								@if($errors->has('body'))
									<span class="error-block">
										{{ $errors->first('body') }}
									</span>
								@endif
							</div>
						</div>
						<div class="tab-panel" id="preview"></div>
					</div>
				</div>

				<div class="fieldset{{ $errors->has('tags') ? ' error' : '' }}">
					<label for="tags">Tags</label>
					<select name="tags[]" class="chosen" data-placeholder="Pick some tags" multiple>
						@foreach($tags as $tag)
							<option value="{{ $tag->id }}" {{ old('tags') && in_array($tag->id, old('tags')) ? ' selected' : '' }}>{{ $tag->name }}</option>		
						@endforeach
					</select>
					
					@if($errors->has('tags'))
						<span class="error-block">
							{{ $errors->first('tags') }}
						</span>
					@endif
				</div>
				
				@can('createPremiumQuestion')
					<div class="fieldset">
						<input type="checkbox" name="premium" id="premium"{{ old('premium') ? ' checked' : '' }} class="switch-input">
						<label for="premium" class="switch"></label>
						
						<label for="premium">I want a pro to answer this question</label>
					</div>
				@endcan

				@if(Auth::user()->is_premium() && Auth::user()->cannot('createPremiumQuestion'))
					<div class="info">
						Your last premium question was asked <strong>{{ Auth::user()->diffSinceLastPremiumQuestion() }}</strong>.
						<br>
						24 hours must pass before asking another one. 
					</div> 
				@endif
				
				@if(!Auth::user()->is_premium())
					<div class="info">
						Have a pro answer your question,satisfaction guaranteed.
						<br>
						<a href="{{ route('premium') }}">Upgrade</a> 
					</div> 
				@endif
								
				{{ csrf_field() }}

				@include('templates.partials.bot_input')

				<button type="submit" class="button">
					Submit question
				</button>

			</form>
		</div>
	</div>
@stop

@section('js')
	<script>
		var route = "{{ route('api.markdown') }}";
	</script>
@stop