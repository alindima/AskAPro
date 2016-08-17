<?php

namespace App\Http\Controllers\Pro;

use Auth;
use App\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProController extends Controller
{
    public function home()
    {
    	$questions = Question::where('premium', 1)->whereHas('answers', function($query) {
    		$query->whereHas('user', function($query) {
    			$query->where('is_pro', 1);
    		});
    	}, '<', 1)->latest()->paginate(15);

    	return view('pro.home')->with('questions', $questions);
    }

    public function mine()
    {
    	$questions = Question::unsolved()->whereHas('answers', function($query) {
    		$query->where('user_id', Auth::user()->id);
    	})->latest()->paginate(15);

    	return view('pro.mine')->with('questions', $questions);
    }
}
