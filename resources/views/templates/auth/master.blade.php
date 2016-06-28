<!DOCTYPE html>
<html lang="en">
<head>
	<title>@yield('title')</title>
	
	@include('templates.partials.meta')

	@yield('css')
</head>
<body>
	<main>
		<div class="auth main-wrapper container-fluid">
			<div class="row">

				<input type="checkbox" name="" class="nav-toggler-checkbox" id="nav-toggler">
				<label for="nav-toggler" class="nav-toggler">
					<i class="fa fa-bars"></i>
				</label>
				
				<nav class="nav">
					aaa
				</nav>
				
				<div class="main-section">

				@yield('content')

				</div>
			</div>
		</div>
	</main>	
	
	@include('templates.partials.cookie_banner')

	@include('templates.partials.js')
	
	@include('templates.partials.flash_messages')
	
	@yield('js')
</body>
</html>