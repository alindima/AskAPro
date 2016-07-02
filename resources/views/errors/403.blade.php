@extends('templates.master')

@section('title')
	Access forbidden - AskAPro
@stop

@section('content')
	<div class="errorpage main-wrapper container-fluid">
		<div class="go-back col-xs-12">
			<a href="{{ url()->previous() }}">
				<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
				Go back
			</a>
		</div>
		
		<div class="main-section col-md-8 col-md-offset-2">
			<h1>Access forbidden</h1>

			<p>
				You don't have permission to access this page.<br>
				Sorry about that.
			</p>
		</div>
	</div>
@stop