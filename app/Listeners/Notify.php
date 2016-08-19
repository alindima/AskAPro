<?php

namespace App\Listeners;

use App\Answer;
use App\Question;
use App\Notification;
use App\Events\AddedAnswer;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Notify
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  AddedAnswer  $event
     * @return void
     */
    public function handle(AddedAnswer $event)
    {
        Notification::create([
            'target' => $event->target,
            'from' => $event->from,
            'message' => 'You have one new answer on your question "' . str_limit($event->question->title, 20) . '"',
            'link' => route('question.show', $event->question->slug) . '#' . $event->answer->id,
        ]);
    }
}
