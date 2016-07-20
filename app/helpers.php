<?php

/**
 * Custom php helpers
 */

if(!function_exists('routeName')){

	function routeName()
	{
		return request()->route()->getName();
	}

}

if(!function_exists('parsedown')){
	
	function parsedown($text)
	{
		return app('parsedown')
			->setMarkupEscaped(true)
			->text($text);
	}
	
}
