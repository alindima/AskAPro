<h1>Hello, {{ $name }}</h1>

<p>
	{{ route('verify', ['email' => $email, 'activation_token' => $token]) }}
</p>