<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $attributes = [
        'premium' => false,
    ];

    protected $fillable = [
    	'title',
    	'slug',
    	'body',
    ];
    
    public function user()
    {
    	return $this->belongsTo('App\User')->withTrashed();
    }

    public function answers()
    {
        return $this->hasMany('App\Answer');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag')->withTimestamps();
    }

    public function scopeSearch($query, $input)
    {   
        return $query->whereRaw("match(title) against(? IN NATURAL LANGUAGE MODE)", [$input]);
    }

    public function scopeUnSolved($query)
    {
        return $query->whereHas('answers', function($q) {
            $q->where('best', 1);
        }, '<', 1);
    }

    public function scopeSolved($query)
    {
        return $query->whereHas('answers', function($q) {
            $q->where('best', 1);
        });
    }

    public function scopePremium($query)
    {
        return $query->where('premium', 1);
    }

    public function scopeNotPremium($query)
    {
        return $query->where('premium', 0);
    }

    public function scopeNotWherePremiumAndUnsolved($query)
    {
        return $query->where(function($query) {
            $query->where('premium', 1)->solved();
        })->orWhere('premium', 0);
    }

    public function is_solved()
    {   
        return $this->answers()->where('best', 1)->exists() ? true : false;
    }

    public function is_premium()
    {
        return $this->premium ? true : false;
    }

    public function makeSlug($title)
	{
	    $slug = str_slug($title);

	    $count = $this->whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();

	    return $count ? "{$slug}-{$count}" : $slug;
	}
}
