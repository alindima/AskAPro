<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (($request->ajax() || $request->wantsJson()) && Auth::check()) {
            return response('Unauthorized.', 401);
        }else if (Auth::check()) {
            return redirect()->route('dashboard');
        }

        return $next($request);
    }
}
