@extends('templates.master')

@section('title')
	Not found - AskAPro
@stop

@section('content')
	<div class="notfound main-wrapper container-fluid">
		<div class="go-back col-xs-12">
			<a href="{{ url()->previous() }}">
				<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
				Go back
			</a>
		</div>
		
		<div class="main-section col-md-8 col-md-offset-2">
			<h1>Page not found</h1>

			<p>
				Looks like this page does not exist.<br>
				Please double-check the url or try again later.
			</p>
		</div>
	</div>
@stop