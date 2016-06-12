<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@yield('title')</title>
	
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
	@yield('css')
</head>
<body>
	
	@yield('content')
	
	@yield('js')
</body>
</html>