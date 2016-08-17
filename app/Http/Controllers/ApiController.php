<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
	public function __construct()
	{
		$this->middleware('api');
	}

    public function markdown(Request $request)
    {
    	return response()->json([
    		'text' => parsedown($request->input('text'))
    	]);
    }
}
