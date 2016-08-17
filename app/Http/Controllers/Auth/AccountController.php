<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\User;
use App\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileRequest;

class AccountController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');

        $this->middleware('redirect_if_premium', [
            'only' => [
                'getJoin',
                'postJoin',
            ]
        ]);

        $this->middleware('premium', [
            'only' => [
                'invoices',
                'invoice'
            ]
        ]);
	}

	public function dashboard()
	{
        $questions = Question::notPremium()->unSolved()->latest('id')->paginate(15);

		return view('auth.dashboard')->with('questions', $questions);
	}

    public function getJoin()
    {
    	return view('auth.join_premium');
    }

    public function postJoin(Request $request)
    {
        Auth::user()->newSubscription('main', 'monthly')->create($request->input('payment_method_nonce'));

        return redirect()->route('dashboard')->with('success', 'Thank you for becoming a premium member! That means the world to us.');
    }

    public function profile(User $user)
    {
    	return view('auth.profile.profile')->with('user', $user);
    }

    public function getEdit()
    {
    	return view('auth.profile.edit');
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

    public function invoices()
    {
        return view('auth.invoices')->with('invoices', Auth::user()->invoices());
    }

    public function invoice($id)
    {
        return Auth::user()->downloadInvoice($id, [
            'vendor'  => '{ AskAPro }',
            'product' => 'Monthly premium plan',
        ]);
    }
}
