<?php

namespace App;

use File;
use Image;
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

    /**
     * Custom functions
     */

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

    public function changePaymentMethod($nonce)
    {
        $response = Braintree_PaymentMethod::create([
            'customerId' => $this->braintree_id,
            'paymentMethodNonce' => $nonce,
            'options' => [
                'makeDefault' => true,
                'verifyCard' => true,
            ]
        ]);

        if(!$response->success){
            return false;
        }

        switch ((new ReflectionClass($response->paymentMethod))->getShortName()) {
            case 'CreditCard':
                $this->card_brand = $response->paymentMethod->cardType;
                $this->card_last_four = $response->paymentMethod->last4;
                $this->paypal_email = null;

                break;
            
            case 'PayPalAccount':
                $this->paypal_email = $response->paymentMethod->email;
                $this->card_brand = null;
                $this->card_last_four = null;
                
                break;
        }

        $this->save();
        
        return true;
    }

    public function addQuestion(Request $request)
    {
        $question = new Question;
        $question->title = $request->input('title');
        $question->body = $request->input('body');
        $question->slug = $question->makeSlug($request->input('title'));
        $question->premium = $request->has('premium') ? 1 : 0;

        $this->questions()->save($question);

        return $question->slug;
    }

}
