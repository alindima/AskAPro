<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\User;
use App\ProfilePicture;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileRequest;
use Illuminate\Http\Request;

class AccountController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
	}

	public function index()
    {
        return redirect()->route('profile', Auth::user()->name)->with('page', 'account');
    }

	public function dashboard()
	{
		return view('auth.dashboard')->with('page', 'dashboard');
	}

    public function getJoin()
    {
    	return view('auth.join_premium');
    }

    public function postJoin(Request $request)
    {
        Auth::user()->newSubscription('main', $request->input('plan'))->create($request->input('payment_method_nonce'));

        return redirect()->route('dashboard')->with('success', 'Thank you for becoming a premium member! That means the world.');
    }

    public function profile(User $user)
    {
    	return view('auth.profile')->with([
            'user' => $user,
            'page' => 'profile',
        ]);
    }

    public function getEdit()
    {
    	return view('auth.edit')->with([
            'page' => 'account',
        ]);
    }

    public function putEdit(ProfileRequest $request)
    {
        $user = Auth::user();

        if($request->hasFile('picture')){
            $user->updateProfilePicture($request->file('picture'));
        }

        $user->update($request->all());

        return redirect()->route('profile', $user->name)->with('success', 'Profile updated');
    }

    public function settings()
    {
        return view('auth.settings')->with([
            'page' => 'account',
        ]);
    }
}
