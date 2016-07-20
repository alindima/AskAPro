<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class RedirectIfPremiumMiddleware
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
        if(Auth::user()->subscribed('main')){
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            }else{
                return redirect()->route('dashboard')->with('info', 'You are already a premium member.');
            }
        }

        return $next($request);
    }
}
