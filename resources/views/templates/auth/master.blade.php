<!DOCTYPE html>
<html lang="en">
	<head>
		<title>@yield('title')</title>
		
		@include('templates.partials.meta')

		@yield('css')
	</head>
	<body>
		<div class="auth main-wrapper container-fluid">
			<div class="row">

				<input type="checkbox" name="" class="nav-toggler-checkbox" id="nav-toggler">
				<label for="nav-toggler" class="nav-toggler">
					<i class="fa fa-bars"></i>
				</label>
				
				<nav class="nav">
					<div class="logo">
						<a href="{{ route('dashboard') }}">
							{ AskAPro }
						</a>
					</div>
					<ul>
						<li>
							<a href="#">
								<i class="fa fa-plus" aria-hidden="true"></i>
								Ask a Question
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-bell-o" aria-hidden="true"></i>
								Notifications
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-search" aria-hidden="true"></i>
								Search
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-list" aria-hidden="true"></i>
								My questions
							</a>
						</li>
						<li class="has-dropdown{{ ($page === 'account' || Session::get('page') === 'account') ? ' active' : '' }}">
							<input type="checkbox" id="dropdown" name="" class="dropdown-checkbox">
							<label for="dropdown" class="dropdown-label">
								<i class="fa fa-user" aria-hidden="true"></i>
								Account <i class="fa fa-caret-down"></i>
							</label>

							<ul class="dropdown-ul">
								
								@if(!Auth::user()->is_premium())
									<li>
										<a href="{{ route('premium') }}">
											Premium
										</a>
									</li>
								@endif
								
								<li>
									<a href="{{ route('profile.index') }}">
										Profile
									</a>
								</li>
								<li>
									<a href="{{ route('profile.edit') }}">
										Edit
									</a>
								</li>
								<li>
									<a href="{{ route('profile.settings') }}">
										Settings
									</a>
								</li>
								<li>
									<a href="{{ route('logout') }}">
										Log out
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				
				<div class="main-section">

					@yield('content')

				</div>
			</div>
		</div>
		
		@include('templates.partials.cookie_banner')

		@include('templates.partials.js')
		
		@include('templates.partials.flash_messages')
		
		@yield('js')
	</body>
</html>