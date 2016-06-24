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
				<form action="" method="post">
					<div class="fieldset">
						<input type="text" name="email" placeholder="email">
					</div>
					
					<div class="fieldset">
						<input type="password" name="password" placeholder="password">
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