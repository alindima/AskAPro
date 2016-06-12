<?php

namespace App\Http\Controllers;

use Session;
use App;

class HomeController extends Controller
{
    public function home()
    {
    	return view('home');
    }

    public function setLang(string $lang)
    {
    	Session::put('locale', $lang);
    	
    	return redirect('/');
    }
}
