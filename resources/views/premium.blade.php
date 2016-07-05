@extends('templates.master')

@section('title')
	Go premium - AskAPro
@stop

@section('content')
	<div class="premium main-wrapper container-fluid">
		<div class="row">
			<div class="go-back col-xs-12">
				<a href="{{ route('home') }}">
					<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
					Go back
				</a>
			</div>	
		</div>

		<div class="row">
			<div class="main-section col-xs-12">
				<div class="col-md-4 column1">
					<p>
						<i class="fa fa-check" aria-hidden="true"></i>
						Our pros will address your question in no more than 24 hours.
					</p>
					<p>
						<i class="fa fa-check" aria-hidden="true"></i>
						You get direct support to one question a day.
					</p>
					<p>
						<i class="fa fa-check" aria-hidden="true"></i>
						We guarantee your bugs WILL get solved
					</p>
					<p>
						<i class="fa fa-check" aria-hidden="true"></i>
						Cancel at any time.No questions asked
					</p>
				</div>

				<div class="col-md-3 col-md-offset-1 column2">
					<a href="{{ route('premium.join') . '?plan=monthly' }}">
						<ul class="price-banner">
							<li class="section1">
								<span>Monthly</span>
							</li>
							<li class="section2">
								<span>$20/month</span>
							</li>
							<li class="section3">
								<a class="button" href="{{ route('premium.join') . '?plan=monthly' }}">
									Upgrade
								</a>
							</li>
						</ul>
					</a>
				</div>
				
				<div class="col-md-3 col-md-offset-1 column3">
					<a href="{{ route('premium.join') . '?plan=yearly' }}">
						<ul class="price-banner">
							<li class="section1">
								<span>Yearly</span>
							</li>
							<li class="section2">
								<span>$220/year</span>
							</li>
							<li class="section3">
								<a class="button" href="{{ route('premium.join') . '?plan=yearly' }}">
									Upgrade
								</a>
							</li>
						</ul>
					</a>
				</div>
			</div>
		</div>
	</div>
@stop