<!DOCTYPE html>
<html lang="en">
<head>
	<title>@yield('title')</title>

	@include('templates.partials.meta')

	@yield('css')
</head>
<body>
	<main>
		@yield('content')
	</main>	
	
	@include('templates.partials.cookie_banner')

	@include('templates.partials.js')
	
	@include('templates.partials.flash_messages')
	
	@yield('js')
</body>
</html>