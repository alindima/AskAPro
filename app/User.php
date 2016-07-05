<?php

namespace App;

use Laravel\Cashier\Billable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Http\Requests\ProfileRequest;
use Image;
use File;

class User extends Authenticatable
{
    use Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'firstname',
        'lastname',
        'description',
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

    public function picture()
    {
        return $this->hasOne('App\ProfilePicture');
    }

    public function is_pro()
    {
        if($this->is_pro == 1){
            return true;
        }else{
            return false;
        }   
    }

    public function is_premium()
    {
        if($this->subscribed('main')){
            return true;
        }
        
        return false;
    }

    public function getName(){
        if(!empty($this->firstname) && !empty($this->lastname)){
            return $this->firstname . ' ' . $this->lastname;
        }

        return $this->name;
    }

    public function getGravatarHash()
    {
        return md5(strtolower(trim($this->email)));
    }

    public function getProfilePicture()
    {
        if(is_null($this->picture)){
            return 'https://www.gravatar.com/avatar/' . $this->getGravatarHash() . '?d=mm';
        }
        
        return url('/') . '/img/profile_pictures/' . $this->picture->image_name;
    }

    public function updateProfilePicture($picture)
    {
        $imageName = $this->name . uniqid() . time() . '.' . $picture->extension();
            
        if(is_null($this->picture)){
            $image = new ProfilePicture([
                'image_name' => $imageName,
            ]);

            $user->picture()->save($image);
        }else{
            File::delete(storage_path() . '/app/public/profile_pictures/' . $this->picture->image_name);

            $this->picture->image_name = $imageName;
            $this->picture->save();
        }

        $image = Image::make($picture);
        $min_dimension = min($image->height(), $image->width());

        $image
            ->crop($min_dimension, $min_dimension)
            ->save(storage_path() . '/app/public/profile_pictures/' . $imageName);
    }

}
