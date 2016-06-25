@if(!Cookie::has('cookie_accept'))
	<div class="cookie-banner">
		<p>
			This website uses cookies.By continuing,you agree to our terms of use.
		</p>
		
		<a href="{{ route('cookie_accept') }}">Accept</a>
	</div>
@endif