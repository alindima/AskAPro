<?php

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Question::class, 500)->create()->each(function($q) {
	        for($i = 1;$i <= rand(1, 5); $i++){
                $q->tags()->attach(App\Tag::find(rand(430, 800))->id);
            }
	    });
    }
}
