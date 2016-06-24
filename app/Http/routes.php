<?php

Route::group(['middleware' => 'locale'], function(){

	Route::get('/', [
		'uses' => 'HomeController@home',
		'as' => 'home',
	]);

	Route::get('signup', [
		'uses' => 'HomeController@getSignup',
		'as' => 'signup',
	]);

	Route::get('login', [
		'uses' => 'HomeController@getLogin',
		'as' => 'login',
	]);

	Route::get('pricing', [
		'uses' => 'HomeController@pricing',
		'as' => 'pricing',
	]);

	Route::get('questions', [
		'uses' => 'HomeController@questions',
		'as' => 'questions',
	]);

	Route::get('verify', [
		'uses' => 'HomeController@verify',
		'as' => 'verify',
	]);

	Route::get('dashboard', function(){
		return 'dashboard';
	})->middleware('auth');


	//Default auth routes
	
	Route::post('signup', 'Auth\AuthController@register');
	
	Route::post('login', 'Auth\AuthController@login');

	Route::get('logout', 'Auth\AuthController@logout');
});

Route::get('setLang/{lang}', [
	'uses' => 'HomeController@setLang',
	'as' => 'setLang',
]);

Route::get('cookie_accept', [
	'uses' => 'HomeController@cookie_accept',
	'as' => 'cookie_accept',
]);
