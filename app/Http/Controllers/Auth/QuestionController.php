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
            $this->authorize('createPremiumQuestion');
        }

        $question = Auth::user()->addQuestion($request->all());
        
        return redirect()->route('question.show', $question->slug)->with('success', 'Question successfully added');
    }

    public function show(Question $question)
    {
        return view('auth.questions.show')->with('question', $question);
    }

    public function edit(Question $question)
    {
        $this->authorize('update', $question);

        return view('auth.questions.edit')->with([
            'question' => $question,
            'tags' => Tag::all(),
        ]);
    }

    public function update(Question $question, QuestionRequest $request)
    {
        $this->authorize('update', $question);

        Auth::user()->updateQuestion($question, $request->all());

        return redirect()->route('question.show', $question->slug)->with('success', 'Question successfully updated!');
    }

    public function mine()
    {
        $questions = Question::where('user_id', Auth::user()->id)->latest('id')->paginate(5);

        return view('auth.questions.mine')->with('questions', $questions);
    }

    public function delete(Question $question)
    {
        $this->authorize('delete', $question);
        
        $question->delete();

        return redirect()->route('questions.mine')->with('success', 'Question successfully deleted');
    }
}
