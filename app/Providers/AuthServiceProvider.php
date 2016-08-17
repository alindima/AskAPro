<?php

namespace App\Providers;

use App\Answer;
use App\Question;
use App\Policies\AnswerPolicy;
use App\Policies\QuestionPolicy;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Question::class => QuestionPolicy::class,
        Answer::class => AnswerPolicy::class,
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @param  \Illuminate\Contracts\Auth\Access\Gate  $gate
     * @return void
     */
    public function boot(GateContract $gate)
    {
        $gate->define('createPremiumQuestion', function($user) {
            if($user->is_premium()){
                $canPostPremium = true;
            }else{
                $canPostPremium = false;
            }

            $questions = $user->questions()->where('premium', 1);

            if($questions->count() > 0){
                $canPostPremium = $questions->latest('id')->first()->created_at->diffInHours() >= 24;
            }

            return $canPostPremium;
        });

        $this->registerPolicies($gate);
    }
}
