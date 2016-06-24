<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@yield('title')</title>

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

	@yield('css')
</head>
<body>
	
	<main>
		@yield('content')
	</main>

	@include('templates.partials.language_modal')	
	
	@include('templates.partials.cookie_banner')

	<script src="{{ elixir('js/all.js') }}"></script>
	
	@include('templates.partials.flash_messages')
	
	@yield('js')
</body>
</html>