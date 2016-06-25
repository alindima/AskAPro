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
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
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

        Mail::queue('emails.activate', $data, function ($m) use($user) {
            $m->to($user->email);
            $m->subject(trans('auth.activation_subject'));
        });

        return redirect('/')->with('success', trans('auth.success_message'));
    }

    public function verify($email, $activation_token)
    {
        $user = User::where('email', $email)->where('activation_token', $activation_token)->firstOrFail();

        $user->active = 1;
        $user->activation_token = null;
        $user->save();

        Auth::login($user);

        return redirect('/');
    }

}
