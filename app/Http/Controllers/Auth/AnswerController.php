<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Validator;
use App\Answer;
use App\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AnswerController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
	}

    public function store(Request $request, Question $question)
    {
        if($question->is_premium()){
            $this->authorize('viewPremium', $question);
        }
        
    	$validator = Validator::make($request->all(), [
            'body' => 'required'
        ]);

        if($validator->fails()){
            return redirect()->to(url()->previous(). '#new-answer')->with('errors', $validator->errors());
        }

        $answer = new Answer;
        $answer->body = $request->input('body');
        $answer->user_id = Auth::user()->id;
        $answer->question_id = $question->id;
        $answer->save();

        return redirect()->to(url()->previous() . '#' . $answer->id)->with('success', 'Answer successfully added.');
    }

    public function markAsBest(Question $question, Answer $answer)
    {
        $this->authorize('markAnswer', $question);

        $answer->best($question);

        return redirect()->to(url()->previous() . '#' . $answer->id)->with('success', 'Answer successfully marked as best!');
    }

    public function unmarkAsBest(Question $question, Answer $answer)
    {
        $this->authorize('markAnswer', $question);
        
        $answer->notBest();

        return redirect()->to(url()->previous() . '#' . $answer->id)->with('success', 'Answer successfully unmarked!');
    }

    public function edit(Question $question, Answer $answer)
    {
        $this->authorize('edit', $answer);

        return view('auth.answers.edit')->with('answer', $answer);
    }

    public function update(Request $request, Question $question, Answer $answer)
    {
        $this->authorize('edit', $answer);

        $this->validate($request, [
            'body' => 'required'
        ]);

        $answer->body = $request->input('body');
        $answer->save();

        return redirect()->to(route('question.show', $question->slug) . '#' . $answer->id)->with('success', 'Answer successfully updated.');
    }
}
