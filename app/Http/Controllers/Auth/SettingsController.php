<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Session;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ChangePasswordRequest;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

        $this->middleware('premium', [
            'except' => [
                'index',
                'change_password',
                'delete_account',
            ]
        ]);

        $this->middleware('redirect_if_on_grace_period', [
            'except' => [
                'index',
                'change_password',
                'delete_account',
                'resume_subscription',
            ],
        ]);

        $this->middleware('on_grace_period', [
            'only' => 'resume_subscription',
        ]);
    }

    public function index()
    {
        return view('auth.settings')->with([
            'page' => 'account',
        ]);
    }

    public function change_password(ChangePasswordRequest $request)
    {
        Auth::user()->password = bcrypt($request->password);
        Auth::user()->save();

        return redirect()->route('settings.index')->with('success', 'Password successfully changed');
    }

    public function resume_subscription()
    {
        Auth::user()->subscription('main')->resume();

        return redirect()->route('dashboard')->with('success', 'Subscription successfully resumed');
    }

    public function cancel_subscription()
    {
        Auth::user()->subscription('main')->cancel();

        return redirect()->route('dashboard')->with('success', 'Subscription successfully canceled');
    }

    public function payment_method(Request $request)
    {
        if(!Auth::user()->changePaymentMethod($request->input('payment_method_nonce'))){
            return back()->with('error', 'There was an error processing your request');
        }

        return back()->with('success', 'Payment method successfully updated');
    }

    public function delete_account(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'da_password' => 'required|old_password'
        ]);

        if($validator->fails()){
            return redirect()->to(url()->previous(). '#delete_account')->with('errors', $validator->errors());
        }

        $user = Auth::user();

        if($user->subscribed('main')){
            $user->subscription('main')->cancel();
        }

        Auth::logout();

        $user->delete();

        return redirect()->route('home')->with('info', 'Your account has been successfully deactivated.');
    }
}
