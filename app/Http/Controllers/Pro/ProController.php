<?php

namespace App\Http\Controllers\Pro;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;

class ProController extends Controller
{
    public function __construct()
    {
    	$this->middleware([
    		'pro',
    	]);
    }

    public function home()
    {
    	return 'pro';
    }
}
