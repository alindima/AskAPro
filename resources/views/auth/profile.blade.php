@extends('templates.auth.master')

@section('title')
	{{ $user->getName() }} - AskAPro
@stop

@section('content')
	<div class="profile">
		<div class="header">
			<div class="name">
				<h1>{{ $user->getName() }}</h1>
				
				@if($user->is_pro())
					<h3 class="staff">Staff professional</h3>	
				@endif
			</div>
			<div class="profile-picture img-responsive">
				<img src="{{ $user->getProfilePicture() }}" alt="{{ $user->getName() }}">
			</div>
		</div>

		<div class="details">
			<div class="section1 col-md-6">
				<div class="section">
					<div class="title">
						Username
					</div>
					<div class="body">
						alindima
					</div>
				</div>

				<div class="section">
					<div class="title">
						Email address
					</div>
					<div class="body">
						alindima
					</div>
				</div>

				<div class="section">
					<div class="title">
						First name
					</div>
					<div class="body">
						alindima
					</div>
				</div>

				<div class="section">
					<div class="title">
						Last name
					</div>
					<div class="body">
						alindima
					</div>
				</div>

				<div class="section">
					<div class="title">
						Created account
					</div>
					<div class="body">
						{{ $user->created_at->diffForHumans() }}
					</div>
				</div>

				<div class="section">
					<div class="title">
						Last active
					</div>
					<div class="body">
						{{ $user->last_seen->diffForHumans() }}
					</div>
				</div>



			</div>
			<div class="section2 col-md-6">
				<div class="section">
					<div class="title">
						Description
					</div>
					<div class="body">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, non, incidunt! Eligendi voluptatibus iusto, praesentium corrupti obcaecati repellat perferendis tenetur et aspernatur. Voluptatibus asperiores nobis non perspiciatis nostrum, veniam, error!
					</div>
				</div>
			</div>
		</div>

	</div>
		
@stop