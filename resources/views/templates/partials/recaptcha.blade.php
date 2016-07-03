<div class="fieldset{{ $errors->has('g-recaptcha-response') ? ' error' : '' }}">
	<div class="g-recaptcha" data-sitekey="{{ Config::get('recaptcha.siteKey') }}">
	</div>
	@if($errors->has('g-recaptcha-response'))
		<span class="error-block">{{ $errors->first('g-recaptcha-response') }}</span>
	@endif
</div>