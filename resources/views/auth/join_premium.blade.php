@extends('templates.master')

@section('title')
	Go premium - AskAPro
@stop

@section('content')
	<div class="join-premium main-wrapper container-fluid">
		<div class="row">
			<div class="go-back col-xs-12">
				<a href="{{ route('premium') }}">
					<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
					Go back
				</a>
			</div>	
		</div>

		<div class="row">
			<div class="main-section col-lg-6 col-lg-offset-3 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
				<h1>Complete your premium subscription</h1>

				<div class="form">
					<form method="post" action="">
						<label for="plan">Choose a billing plan</label>
						<select name="plan" id="plan">
							<option value="monthly" {{ request()->get('plan') == 'monthly' ? 'selected' : '' }}>
								Monthly(20 &euro;)
							</option>
							<option value="yearly"  {{ request()->get('plan') == 'yearly' ? 'selected' : '' }}>
								Yearly(220 &euro;)
							</option>
						</select>
						
						<div id="payment-form"></div>
						
						{{ csrf_field() }}

						<button class="button" type="submit">
							Pay
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
@stop

@section('js')
	<script>
		braintree.setup(
			"{{ Braintree_ClientToken::generate() }}",
			"dropin",
			{
				container: "payment-form"
			}
		);
	</script>
@stop