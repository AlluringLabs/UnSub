<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Helpers\TwitterWrapper;

use Twitter;
use App\User;

class FetchFriends extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:friends';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gets friends from twitter for all users.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {   
        // May want to look into this for future use...
        // $actions = [
        //     StoreFriends::class,
        //     FetchFriendsTweets::class
        // ];

        // foreach($actions as $action) {
        //     (new $action())->handle();
        // }

        // foreach(User::all() as $user)
        // {
        //     (new TwitterWrapper())->setToken($user->token, $user->tokenSecret);
        //     $friends = Twitter::getFriends(['user_id' => $user->twitter_id]);

        //     foreach($friends as $friend)
        //     {
                
        //     }
        // }
    }
}
