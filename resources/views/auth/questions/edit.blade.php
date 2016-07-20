@extends('templates.auth.master')

@section('title')
	New Question - AskAPro
@stop

@section('content')
	<div class="edit-question">
		<div class="header">
			<h1>{{ $question->title }}</h1>
		</div>
		
		<div class="form">
			<form action="{{ route('question.edit', $question->slug) }}" method="post" autocomplete="off">
				<div class="fieldset{{ $errors->has('title') ? ' error' : '' }}">
					<label for="title">Title</label>
					<input placeholder="e.g. How to sort an array in php" type="text" name="title" id="title" value="{{ old('title') ? old('title') : $question->title }}">
					
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
								<textarea name="body" id="body" placeholder="Describe your problem here...">{{ old('body') ? old('body') : $question->body }}</textarea>
								
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
							<option value="{{ $tag->id }}" {{ $question->tags->contains($tag) ? ' selected' : '' }}>{{ $tag->name }}</option>
						@endforeach
					</select>
					
					@if($errors->has('tags'))
						<span class="error-block">
							{{ $errors->first('tags') }}
						</span>
					@endif
				</div>
								
				{{ csrf_field() }}

				@include('templates.partials.bot_input')
				
				<input type="hidden" name="_method" value="put">	

				<button type="submit" class="button">
					Update question
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