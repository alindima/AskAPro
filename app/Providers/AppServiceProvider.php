<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\User;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Custom validation rule for active users
        Validator::extend('active_user', function($attribute, $value, $parameters, $validator) {
            $user = User::where('email', $value)->first();

            if($user->active == 0){
                return false;
            }

            return true;            
        });

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
