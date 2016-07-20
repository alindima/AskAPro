<?php

namespace App\Providers;

use Parsedown;
use Illuminate\Support\ServiceProvider;

class ParsedownServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('parsedown', function ($app) {
            return new Parsedown;
        });
    }
}
