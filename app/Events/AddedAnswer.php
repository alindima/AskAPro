<?php

namespace App\Events;

use App\User;
use App\Answer;
use App\Question;
use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class AddedAnswer extends Event
{
    use SerializesModels;

    public $target;

    public $from;

    public $question;

    public $answer;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(int $target, int $from, Question $question, Answer $answer)
    {
        $this->target = $target;

        $this->from = $from;
        
        $this->question = $question;

        $this->answer = $answer;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
