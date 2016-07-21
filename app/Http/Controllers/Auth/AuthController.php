<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;

use Socialite;
use JWTAuth;

class AuthController extends Controller
{
    
    public function redirectToProvider()
    {
        return Socialite::driver('twitter')->redirect();
    }

    public function handleProviderCallback()
    {
        $social = Socialite::driver('twitter')->user();
        $user = $this->findOrCreateUser($social);
        $jwt = JWTAuth::fromUser($user);
        // dump($jwt);
        return redirect('/authenticate/' . $jwt);
    }

    public function findOrCreateUser($social)
    {
        $user = User::where('username', '=', $social->nickname)->first();
        if($user) {
            return $user;
        }

        $user = User::create([
            'username' => $social->nickname,
            'twitter_id' => $social->id,
            'name' => $social->name,
            'token' => $social->token,
            'tokenSecret' => $social->tokenSecret
        ]);
        return $user;
    }

}
