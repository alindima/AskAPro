<?php

namespace App\Validation;

use Auth;
use Hash;
use App\User;

class Validator
{
	public function active_user($attribute, $value, $parameters, $validator)
	{
		$user = User::where('email', $value);

        if($user->count() !== 0 && $user->first()->active == 0){
            return false;
        }

        return true; 
	}

	public function recaptcha($attribute, $value, $parameters, $validator)
	{
		$response = app('recaptcha')->verify($value, request()->ip());
		
		if(!$response->isSuccess()){
			return false;
		}

		return true;
	}

	public function bot($attribute, $value, $parameters, $validator)
	{
		if(!empty($value)){
			abort(403);
		}

		return true;
	}

	public function old_password($attribute, $value, $parameters, $validator)
	{
		if(!Hash::check($value, Auth::user()->password)){
			return false;
		}

		return true;
	}
}