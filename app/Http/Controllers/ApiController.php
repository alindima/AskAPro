<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
	public function __construct()
	{
		if(!request()->ajax()){
			abort(403);
		}
	}

    public function markdown(Request $request)
    {
    	return response()->json([
    		'text' => parsedown($request->input('text'))
    	]);
    }
}
