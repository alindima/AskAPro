<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfilePicture extends Model
{
    protected $table = 'profile_pictures';

    public function user()
    {
    	return $this->belongsTo('App\User');
    }
}
