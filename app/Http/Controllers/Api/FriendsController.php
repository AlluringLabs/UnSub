<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Helpers\TwitterWrapper;
use App\User;

use JWTAuth;
use Twitter;

class FriendsController extends Controller
{
    
	public function index()
	{
		$user = JWTAuth::parseToken()->authenticate();
		(new TwitterWrapper())->setToken($user->token, $user->tokenSecret);

        $friends = Twitter::getFriendsIds(['user_id' => $user->twitter_id, 'count' => 5000]);
        dump($friends);

        // Don't do this... It'll quickly exceed the rate limit, but if you must see...
        // foreach($friends->ids as $friend)
        // {
        // 	$statuses = Twitter::getUserTimeline(['user_id' => $friend, 'count' => 3]);
        // 	dump($statuses);
        // }

        // return response()->json(['friends' => compact('friends')]);
	}

	public function destroy($id)
	{

	}

}
