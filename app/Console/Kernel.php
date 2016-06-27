<?php

namespace App\Console;

use App\User;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\Inspire::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function(){
            //delete unactivated accounts after a week
            
            $users = User::where('active', 0)->get();

            foreach($users as $ser){
                if($user->created_at->diffInDays(Carbon::now()) >= 7){
                    $user->delete();
                }
            }

        })->daily();
    }
}
