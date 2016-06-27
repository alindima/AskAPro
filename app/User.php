<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'activation_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'activation_token',
        'is_pro',
    ];

    /**
     * The attributes that should be treated as Carbon instances
     * 
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'last_seen',
    ];

    public function is_pro()
    {
        if($this->is_pro == 1){
            return true;
        }else{
            return false;
        }   
    }

}
