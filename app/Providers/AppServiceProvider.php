<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Validator;
use Braintree_Configuration;

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
        Validator::extend('bot', 'App\Validation\Validator@bot');

        //braintree-specific sdk calls
        Braintree_Configuration::environment(env('BRAINTREE_ENV'));
        Braintree_Configuration::merchantId(env('BRAINTREE_MERCHANT_ID'));
        Braintree_Configuration::publicKey(env('BRAINTREE_PUBLIC_KEY'));
        Braintree_Configuration::privateKey(env('BRAINTREE_PRIVATE_KEY'));
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
