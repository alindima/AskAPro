<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Image;
use File;
use App\User;
use App\ProfilePicture;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileRequest;

class AccountController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
	}

	public function index()
    {
        return redirect()->route('profile', Auth::user()->name)->with('page', 'account');
    }

	public function dashboard()
	{
		return view('auth.dashboard')->with('page', 'dashboard');
	}

    public function joinPremium()
    {
    	return 'join premium';
    }

    public function profile(User $user)
    {
    	return view('auth.profile')->with([
            'user' => $user,
            'page' => 'profile',
        ]);
    }

    public function getEdit()
    {
    	return view('auth.edit')->with([
            'page' => 'account',
        ]);
    }

    public function putEdit(ProfileRequest $request)
    {
        $user = Auth::user();

        if($request->hasFile('picture')){
            $imageName = $user->name . uniqid() . time() . '.' . $request->file('picture')->extension();
            
            if(is_null($user->picture)){
                $image = new ProfilePicture([
                    'image_name' => $imageName,
                ]);

                $user->picture()->save($image);
            }else{
                File::delete(storage_path() . '/app/public/profile_pictures/' . $user->picture->image_name);

                $user->picture->image_name = $imageName;
                $user->picture->save();
            }

            $image = Image::make($request->file('picture'));
            $min_dimension = min($image->height(), $image->width());

            $image
                ->crop($min_dimension, $min_dimension)
                ->save(storage_path() . '/app/public/profile_pictures/' . $imageName);
        }

        $user->update($request->all());

        return redirect()->route('profile', $user->name)->with('success', 'Profile updated');
    }

    public function settings()
    {
        return view('auth.settings')->with([
            'page' => 'account',
        ]);
    }
}
