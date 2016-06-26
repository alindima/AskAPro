@extends('templates.master')

@section('title')
	Reset your password - AskAPro
@stop

@section('content')
    <div class="signup main-wrapper container-fluid">
		<div class="row">
			<div class="go-back col-xs-12">
				<a href="{{ route('login') }}">
					<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
					Go back
				</a>
			</div>	
		</div>

		<div class="row">
			<div class="form col-md-8 col-md-offset-1 col-xs-11">
				<h1>Reset your password</h1>

				<form action="{{ route('password.email') }}" method="post">
					<div class="fieldset{{ $errors->has('email') ? ' error' : '' }}">
						<label for="email">
							Email
						</label>
						<input type="text" name="email" id="email" value="{{ old('email') }}">
						@if($errors->has('email'))
							<span class="error-block">{{ $errors->first('email') }}</span>
						@endif
					</div>

					{{ csrf_field() }}
					
					<button class="button" type="submit">Send password reset link</button>
				</form>
			</div>
		</div>
	</div>
@stop