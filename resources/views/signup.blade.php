@extends('templates.master')

@section('title')
	Sign up - AskAPro
@stop

@section('content')
	<div class="signup main-wrapper container-fluid">
		<div class="row">
			<div class="form col-md-8 col-md-offset-1 col-xs-11">
				<h1>Sign up</h1>
				<form action="{{ action('\App\Http\Controllers\Auth\AuthController@register') }}" method="post">
					<div class="fieldset">
						<label for="username">
							Username
						</label>
						<input type="text" name="username" id="username">
					</div>
					<div class="fieldset">
						<label for="email">
							Email
						</label>
						<input type="text" name="email" id="email">
					</div>
					<div class="fieldset">
						<label for="password">
							Password
						</label>
						<input type="password" name="password" id="password">
					</div>
					<div class="fieldset">
						<input type="checkbox" name="remember_me" id="remember_me">
						<label for="remember_me">
							Remember me
						</label>
					</div>

					{{ csrf_field() }}
					
					<button class="button" type="submit">Sign up</button>
				</form>
			</div>
		</div>
	</div>
@stop