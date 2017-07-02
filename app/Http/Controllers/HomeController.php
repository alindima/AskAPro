<?php

namespace App\Http\Controllers;

use Session;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', [
            'except' => [
                'questions',
                'setLang',
                'premium',
            ],
        ]);
    }

    public function home()
    {
    	return view('home');
    }

    public function premium()
    {
        return view('premium');
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
        return back()
            ->withCookie(cookie()->forever('cookie_accept', 1));
    }
}
