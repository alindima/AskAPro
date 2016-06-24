<?php

namespace App\Http\Controllers;

use Session;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'questions']);
    }

    public function home()
    {
    	return view('home');
    }

    public function pricing()
    {
        return view('pricing');
    }

    public function getSignup()
    {
        return view('signup');
    }
    
    public function getLogin()
    {
        return view('login');
    }

    public function questions()
    {
        return view('questions');
    }

    public function setLang(string $lang)
    {
        Session::put('locale', $lang);
        
        return back();
    }

    public function cookie_accept()
    {
        return back()->withCookie(cookie()->forever('cookie_accept', 1));
    }

    public function verify($activation_token)
    {

    }

}
