<?php

Route::group(['middleware' => 'locale'], function(){

	//normal routes
	Route::group(['middleware' => 'redirect_if_pro'], function(){
		
		//home routes
		
		Route::get('/', [
			'uses' => 'HomeController@home',
			'as' => 'home',
		]);

		Route::get('premium', [
			'uses' => 'HomeController@premium',
			'as' => 'premium',
		]);

		Route::get('questions', [
			'uses' => 'HomeController@questions',
			'as' => 'questions',
		]);


		//account routes

		Route::get('dashboard', [
			'uses' => 'Auth\AccountController@dashboard',
			'as' => 'dashboard',
		]);

		Route::get('premium/join', [
			'uses' => 'Auth\AccountController@joinPremium',
			'as' => 'premium.join',
		]);


		//auth routes
		
		Route::get('signup', [
			'uses' => 'Auth\AuthController@getSignup',
			'as' => 'signup',
		]);

		Route::post('signup', 'Auth\AuthController@register');

		Route::get('login', [
			'uses' => 'Auth\AuthController@getLogin',
			'as' => 'login',
		]);
		
		Route::post('login', 'Auth\AuthController@login');

		Route::get('activate/{email}/{activation_token}', [
			'uses' => 'Auth\AuthController@verify',
			'as' => 'verify',
		]);

		//password routes
		
		Route::get('password/reset', [
			'uses' => 'Auth\PasswordController@getReset',
			'as' => 'password.reset',
		]);

		Route::post('password/reset', 'Auth\PasswordController@reset');

		Route::get('password/reset/{token}', 'Auth\PasswordController@showResetForm');

		Route::post('password/email', [
			'uses' => 'Auth\PasswordController@sendResetLinkEmail',
			'as' => 'password.email',
		]);
	});

	//pro routes
	Route::get('pro', [
		'uses' => 'Pro\ProController@home',
		'as' => 'pro.home',
	]);

	//common routes
	Route::get('logout', [
		'uses' => 'Auth\AuthController@logout',
		'as' => 'logout',
	]);

	Route::get('cookie_accept', [
		'uses' => 'HomeController@cookie_accept',
		'as' => 'cookie_accept',
	]);
});

Route::get('setLang/{lang}', [
	'uses' => 'HomeController@setLang',
	'as' => 'setLang',
]);
