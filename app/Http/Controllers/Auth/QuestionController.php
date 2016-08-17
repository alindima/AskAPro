<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Tag;
use App\Question;
use Illuminate\Http\Request;
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
        if($question->is_premium()){
            $this->authorize('viewPremium', $question);
        }

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
        $questions = Auth::user()->questions()->latest('id')->paginate(15);

        return view('auth.questions.mine')->with('questions', $questions);
    }

    public function delete(Question $question)
    {
        $this->authorize('delete', $question);
        
        $question->delete();

        return redirect()->route('questions.mine')->with('success', 'Question successfully deleted');
    }

    public function search(Request $request, Tag $tag)
    {
        $questions = Question::notWherePremiumAndUnsolved();

        if($tag->exists){
            $questions = $questions->whereHas('tags', function($query) use($tag) {
                $query->where('name', $tag->name);
            });
        }
        
        if($request->has('s')){
            $questions = $questions->search($request->input('s'));
        }
        
        return view('auth.questions.search')->with([
            'questions' => $questions->latest('id')->paginate(15),
            'tag' => $tag,
            'tags' => Tag::all(),
        ]);
    }
}
