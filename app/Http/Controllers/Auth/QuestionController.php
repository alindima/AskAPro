<?php

namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;

class QuestionController extends Controller
{
    public function create()
    {
    	return view('auth.questions.create', [
    		'page' => 'questions.create',
    	]);
    }

    public function store()
    {
    	return 'posted';
    }
}
