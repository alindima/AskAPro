<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $attributes = [
        'best' => false,
    ];

    protected $fillable = [
    	'body',
    ];

    public function question()
    {
    	return $this->belongsTo('App\Question');
    }

    public function user()
    {
    	return $this->belongsTo('App\User');
    }

    public function is_best()
    {
        return $this->best ? true : false;
    }

    public function best(Question $question)
    {
        if($question->is_solved()){
            $previous_answer = $question->answers()->where('best', 1)->first();
            $previous_answer->best = 0;
            $previous_answer->save();
        }

        $this->best = 1;
        $this->save();

        return $this;
    }

    public function notBest()
    {
        $this->best = 0;
        $this->save();

        return $this;
    }
}
