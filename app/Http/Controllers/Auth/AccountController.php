<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class AccountController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
	}

	public function index()
    {
        return redirect()->route('profile', Auth::user());
    }

	public function dashboard()
	{
		return view('auth.dashboard')->with('page', 'dashboard');
	}

    public function joinPremium()
    {
    	return 'join premium';
    }

    public function profile(User $user)
    {
    	return view('auth.profile')->with([
            'user' => $user,
            'page' => 'profile',
        ]);
    }

    public function edit()
    {
    	return view('auth.edit')->with([
            'page' => 'account',
        ]);
    }

    public function settings()
    {
        return view('auth.settings')->with([
            'page' => 'account',
        ]);
    }
}
