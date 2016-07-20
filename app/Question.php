<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Question extends Model
{
    protected $fillable = [
    	'title',
    	'slug',
    	'body',
    ];

    protected static function boot()
    {
        parent::boot();
    }

    public function user()
    {
    	return $this->belongsTo('App\User')->withTrashed();
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag')->withTimestamps();
    }

    public function makeSlug($title)
	{
	    $slug = str_slug($title);

	    $count = Question::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();

	    return $count ? "{$slug}-{$count}" : $slug;
	}

    public function solved()
    {
        return false;
    }
}
