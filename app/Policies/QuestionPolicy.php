<?php

namespace App\Policies;

use App\User;
use App\Question;
use Illuminate\Auth\Access\HandlesAuthorization;

class QuestionPolicy
{
    use HandlesAuthorization;

    public function update(User $user, Question $question)
    {
        return $user->id === $question->user->id;
    }

    public function delete(User $user, Question $question)
    {
        return $user->id === $question->user->id;
    }

    public function markAnswer(User $user, Question $question)
    {
    	return $user->id === $question->user->id;
    }

    public function viewPremium(User $user, Question $question)
    {
    	if($user->is_pro() || $user->id === $question->user->id || $question->is_solved()){
    		return true;
    	}

    	return false;
    }
}
