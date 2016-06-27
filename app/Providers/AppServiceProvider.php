<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
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
        //Import custom validation rules
        Validator::extend('active_user', 'App\Validation\Validator@active_user');
        Validator::extend('recaptcha', 'App\Validation\Validator@recaptcha');
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
