@extends('templates.master')

@section('title')
	{{ trans('login.title') }} - AskAPro
@stop

@section('content')
	<div class="login main-wrapper container-fluid">
		<div class="go-back col-xs-12">
			<a href="{{ route('home') }}">
				<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
				Go back
			</a>
		</div>
		
		<div class="main-section col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
			<div class="logo">
				<a href="{{ route('home') }}">{ AskAPro }</a>
			</div>
			<div class="form">
				<form action="{{ action('Auth\AuthController@login') }}" method="post">
					<div class="fieldset{{ $errors->has('email') ? ' error' : '' }}">
						<input type="text" name="email" placeholder="email" value="{{ old('email') }}">
						@if($errors->has('email'))
							<span class="error-block">{{ $errors->first('email') }}</span>
						@endif
					</div>
					
					<div class="fieldset{{ $errors->has('password') ? ' error' : '' }}">
						<input type="password" name="password" placeholder="password">
						@if($errors->has('password'))
							<span class="error-block">{{ $errors->first('password') }}</span>
						@endif
					</div>

					<div class="fieldset">
						<input type="checkbox" name="remember" id="remember"{{ old('remember') ? ' checked' : ''}}>
						<label for="remember">
							Remember me
						</label>
					</div>
					
					{{ csrf_field() }}

					<button class="button" type="submit">
						Log in
					</button>
				</form>
			</div>
		</div>
	</div>
@stop