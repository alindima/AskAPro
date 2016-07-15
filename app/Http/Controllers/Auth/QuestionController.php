<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Tag;
use App\Question;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionRequest;

class QuestionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create()
    {
       	return view('auth.questions.create')->with('tags', Tag::all());
    }

    public function store(QuestionRequest $request)
    {
    	if($request->has('premium')){
            $this->authorize('createPremiumQuestion', Auth::user());
        }

        $question = Auth::user()->addQuestion($request);
        $question->tags()->attach($request->input('tags'));
        
        return redirect()->route('question.show', $question->slug)->with('success', 'Question successfully added');
    }

    public function show(Question $question)
    {
        return $question->title;
    }
}
