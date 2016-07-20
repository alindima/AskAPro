<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class PremiumMiddleware
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
        if (!Auth::user()->subscribed('main')) {
            if ($request->ajax() || $request->wantsJson()) {
                return response('Unauthorized.', 401);
            } else {
                return redirect()->route('premium')->with('error', 'You must be a premium member to access this page.');
            }
        }

        return $next($request);
    }
}
