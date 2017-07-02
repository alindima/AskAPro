<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class ProfileRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'max:255|alpha',
            'lastname' => 'max:255|alpha',
            'description' => 'max:1000',
            'picture' => 'image|max:3000',
            'my_name' => 'bot',
        ];
    }
}
