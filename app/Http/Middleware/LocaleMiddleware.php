<?php

namespace App\Http\Middleware;

use Closure;
use Session;
use App;
use Request;

class LocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $route = (explode('/', $request->path()))[0];

        if(Session::has('locale') && $route !== 'setLang'){
            App::setLocale(Session::get('locale'));
        }

        return $next($request);
    }
}
