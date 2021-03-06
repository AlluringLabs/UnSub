<?php

namespace App\Helpers;

use Twitter;

class TwitterWrapper
{
   protected $config = [];

   public function __construct()
   {
      $this->setConfig([
         'consumer_key' => env('TWITTER_CONSUMER_KEY'),
         'consumer_secret' => env('TWITTER_CONSUMER_SECRET'),
      ]);
   }

   protected function setConfig( $config = [] )
   {
      $this->config = array_replace_recursive( $this->config, $config );
      Twitter::reconfig( $this->config );
   }

   public function setToken( $token, $secret )
   {
      $this->setConfig([
         'token'     => $token,
         'secret'     => $secret,
      ]);
   }
}