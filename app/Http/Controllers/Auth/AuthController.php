<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Mail;
use Auth;
use App\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;


    protected $redirectTo = 'dashboard';

    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
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
            $this->loginUsername() => 'required|active_user', 'password' => 'required',
        ]);
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
