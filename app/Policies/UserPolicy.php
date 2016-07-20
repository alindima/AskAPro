<?php

namespace App\Policies;

use App\User;
use App\Question;
use Carbon\Carbon;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;
}
