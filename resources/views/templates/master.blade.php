<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@yield('title')</title>
	
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	@yield('css')
</head>
<body>
	
	@yield('content')
	
	@yield('js')
</body>
</html>