<?php

Route::get('/', [
	'uses' => 'HomeController@home',
	'as' => 'home',
	'middleware' => 'locale',
]);

Route::get('setLang/{lang}', [
	'uses' => 'HomeController@setLang',
	'as' => 'setLang',
]);
