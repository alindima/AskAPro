<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
	protected $fillable = [
		'target',
		'from',
		'message',
		'link',
	];

    public function target()
    {
    	return $this->belongsTo('App\User', 'target');
    }

    public function from()
    {
    	return $this->belongsTo('App\User', 'from');
    }

    public function scopeUnRead($query)
    {
        return $query->where('seen', 0);
    }
}
