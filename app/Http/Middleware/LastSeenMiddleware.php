<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Carbon\Carbon;

class LastSeenMiddleware
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
        $response = $next($request);

        if(Auth::check()){
            Auth::user()->last_seen = Carbon::now();
            Auth::user()->save();
        }

        return $response;
    }
}
