<?php

namespace App\Validation;

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
}