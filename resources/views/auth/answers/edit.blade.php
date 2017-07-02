@extends('templates.auth.master')

@section('title')
	Edit answer - AskAPro
@stop

@section('content')
	<div class="edit-answer">
		<div class="header">
			<h1>Edit answer</h1>
		</div>
		
		<div class="form">
			<form action="{{ route('answer.edit', [$answer->question->slug, $answer->id]) }}" method="post">
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
								<textarea name="body" id="body">{{ $answer->body }}</textarea>
								
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
				
				{{ csrf_field() }}

				<input type="hidden" name="_method" value="put">

				<button type="submit" class="button">Update answer</button>
			</form>
		</div>
	</div>
@stop

@section('js')
	<script>
		var route = "{{ route('api.markdown') }}";
	</script>
@stop