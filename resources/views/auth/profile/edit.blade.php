@extends('templates.auth.master')

@section('title')
	Edit profile - AskAPro
@stop

@section('content')
	<div class="edit">
		<div class="header">
			<h1>Edit profile</h1>
		</div>
		<div class="form">
			<form action="{{ route('profile.edit') }}" method="post" enctype="multipart/form-data">
				<div class="fieldset{{ $errors->has('picture') ? ' error' : '' }}">
					<input type="file" name="picture" id="picture" class="file">
					<label class="button" for="picture">
						<i class="fa fa-upload" aria-hidden="true"></i>
						Choose a profile picture...
					</label>
					@if($errors->has('picture'))
						<span class="error-block">
							{{ $errors->first('picture') }}
						</span>
					@endif
				</div>
				<div class="fieldset{{ $errors->has('firstname') ? ' error' : '' }}">
					<label for="firstname">First name</label>
					<input type="text" name="firstname" id="firstname" value="{{ Auth::user()->firstname }}">
					@if($errors->has('firstname'))
						<span class="error-block">
							{{ $errors->first('firstname') }}
						</span>
					@endif
				</div>
				<div class="fieldset{{ $errors->has('lastname') ? ' error' : '' }}">
					<label for="lastname">Last name</label>
					<input type="text" name="lastname" id="lastname" value="{{ Auth::user()->lastname }}">
					@if($errors->has('lastname'))
						<span class="error-block">
							{{ $errors->first('lastname') }}
						</span>
					@endif
				</div>
				<div class="fieldset{{ $errors->has('description') ? ' error' : '' }}">
					<label for="description">Description</label>
					<textarea name="description" id="description">{{ Auth::user()->description }}</textarea>
					@if($errors->has('description'))
						<span class="error-block">
							{{ $errors->first('description') }}
						</span>
					@endif
				</div>

				<input type="hidden" name="_method" value="put">
				
				{{ csrf_field() }}

				@include('templates.partials.bot_input')

				<button type="submit" class="button">
					Update
				</button>
			</form>
		</div>
	</div>
@stop