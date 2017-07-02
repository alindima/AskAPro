<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class OnGracePeriod
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
        if(!Auth::user()->subscription('main')->onGracePeriod()){
            abort(403);
        }

        return $next($request);
    }
}
