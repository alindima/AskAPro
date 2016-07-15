<?php

namespace App\Policies;

use App\User;
use Carbon\Carbon;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function createPremiumQuestion(User $user)
    {
        if($user->is_premium()){
            $canPostPremium = true;
        }else{
            $canPostPremium = false;
        }

        $questions = $user->questions()->where('premium', 1);

        if($questions->count() > 0){
            $canPostPremium = $questions->orderBy('id', 'desc')->first()->created_at->diffInHours(Carbon::now()) >= 24;
        }

        return $canPostPremium;
    }
}
