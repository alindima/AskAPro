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
});

Route::get('setLang/{lang}', [
	'uses' => 'HomeController@setLang',
	'as' => 'setLang',
]);

Route::get('cookie_accept', [
	'uses' => 'HomeController@cookie_accept',
	'as' => 'cookie_accept',
]);
