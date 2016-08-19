<?php

namespace App\Http\Controllers\Auth;

use Mail;
use Auth;
use Hash;
use Session;
use App\User;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    protected $redirectTo = 'dashboard';

    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255|alpha_dash|unique:users',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
            'g-recaptcha-response' => 'required|recaptcha',
            'my_name' => 'bot',
        ]);
    }

    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'activation_token' => str_random(100),
        ]);
    }

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->loginUsername() => 'required|active_user',
            'password' => 'required',
        ]);
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        $throttles = $this->isUsingThrottlesLoginsTrait();

        if ($throttles && $lockedOut = $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        $credentials = $this->getCredentials($request);

        //if the account is deactivated(sof-deleted),re-activate the account and login accordingly.

        $user = User::withTrashed()->where('email', $request->input('email')); 
            
        if($user->count() > 0 && $user->first()->trashed() && Hash::check($request->input('password'), $user->first()->password)){

            $user->first()->restore();

            Session::flash('success', 'Welcome back! Your account has been successfully re-activated.');

            Auth::guard($this->getGuard())->login($user->first(), $request->has('remember'));

            return $this->handleUserWasAuthenticated($request, $throttles);
            
        }
        
        if ($user->first() && Hash::check($request->input('password'), $user->first()->password)) {

            Auth::guard($this->getGuard())->login($user->first(), $request->has('remember'));

            return $this->handleUserWasAuthenticated($request, $throttles);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        if ($throttles && ! $lockedOut) {
            $this->incrementLoginAttempts($request);
        }

        return $this->sendFailedLoginResponse($request);
    }

    public function register(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            $this->throwValidationException(
                $request, $validator
            );
        }

        $this->create($request->all());

        $user = User::where('email', $request->email)->first();

        $data['name'] = $user->name;
        $data['email'] = $user->email;
        $data['token'] = $user->activation_token;

        Mail::queue('auth.emails.activate', $data, function ($m) use($user) {
            $m->to($user->email);
            $m->subject(trans('auth.activation_subject'));
        });

        return redirect('/')->with('success', trans('auth.success_message'));
    }

    public function getSignup()
    {
        return view('signup');
    }
    
    public function getLogin()
    {
        return view('login');
    }

    public function verify($email, $activation_token)
    {
        $user = User::where('email', $email)->where('activation_token', $activation_token)->firstOrFail();

        $user->active = 1;
        $user->activation_token = null;
        $user->save();

        Auth::login($user);

        return redirect($this->redirectTo)->with('success', trans('auth.account_activated'));
    }

}
