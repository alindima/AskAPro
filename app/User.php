<?php

namespace App;

use File;
use Image;
use Carbon\Carbon;
use ReflectionClass;
use Braintree_PaymentMethod;
use Illuminate\Http\Request;
use Laravel\Cashier\Billable;
use App\Http\Requests\ProfileRequest;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Billable,
        SoftDeletes;

    protected $attributes = [
        'active' => false,
        'is_pro' => false,
    ];

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
        'braintree_id',
        'paypal_email',
        'card_brand',
        'card_last_four',
        'trial_ends_at',
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
        'deleted_at',
    ];
    
    /**
     * Define eloquent relationships
     */
    
    public function picture()
    {
        return $this->hasOne('App\ProfilePicture');
    }

    public function questions()
    {
        return $this->hasMany('App\Question');
    }

    public function answers()
    {
        return $this->hasMany('App\Answer');
    }  

    public function notifications()
    {
        return $this->hasMany('App\Notification', 'target');
    }

    /**
     * Custom functions
     */

    public function is_pro()
    {
        if($this->is_pro == 1){
            return true;
        }

        return false;   
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
            return 'https://www.gravatar.com/avatar/' . $this->getGravatarHash() . '?d=mm&s=100';
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

            $this->picture()->save($image);
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

    public function addQuestion(array $input)
    {
        $question = new Question;
        $question->title = $input['title'];
        $question->body = $input['body'];
        $question->slug = $question->makeSlug($input['title']);
        $question->premium = array_key_exists('premium', $input) ? 1 : 0;

        $this->questions()->save($question);

        $question->tags()->attach($input['tags']);

        return $question;
    }

    public function updateQuestion(Question $question, array $input)
    {
        $question->title = $input['title'];
        $question->body = $input['body'];

        $question->save();

        $question->tags()->sync($input['tags']);

        return $question;
    }

    public function diffSinceLastPremiumQuestion()
    {
        return $this->questions()->where('premium', 1)->latest('id')->first()->created_at->diffForHumans();
    }

}
