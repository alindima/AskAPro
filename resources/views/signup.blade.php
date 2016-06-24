@extends('templates.master')

@section('title')
	Sign up - AskAPro
@stop

@section('content')
	<div class="signup main-wrapper container-fluid">
		<div class="row">
			<div class="form col-md-8 col-md-offset-1 col-xs-11">
				<h1>Sign up</h1>

				<form action="{{ action('Auth\AuthController@register') }}" method="post">
					<div class="fieldset{{ $errors->has('name') ? ' error' : '' }}">
						<label for="username">
							Username
						</label>
						<input type="text" name="name" id="username" value="{{ old('name') }}">
						@if($errors->has('name'))
							<span class="error-block">{{ $errors->first('name') }}</span>
						@endif
					</div>
					<div class="fieldset{{ $errors->has('email') ? ' error' : '' }}">
						<label for="email">
							Email
						</label>
						<input type="text" name="email" id="email" value="{{ old('email') }}">
						@if($errors->has('email'))
							<span class="error-block">{{ $errors->first('email') }}</span>
						@endif
					</div>
					<div class="fieldset{{ $errors->has('password') ? ' error' : '' }}">
						<label for="password">
							Password
						</label>
						<input type="password" name="password" id="password">
						@if($errors->has('password'))
							<span class="error-block">{{ $errors->first('password') }}</span>
						@endif
					</div>
					<div class="fieldset">
						<label for="password_confirmation">
							Confirm password
						</label>
						<input type="password" name="password_confirmation" id="password_confirmation">
					</div>

					{{ csrf_field() }}
					
					<button class="button" type="submit">Sign up</button>
				</form>
			</div>
		</div>
	</div>
@stop