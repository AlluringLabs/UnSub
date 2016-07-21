<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Authentication Routes
Route::get('/auth', 'Auth\AuthController@redirectToProvider');
Route::get('/auth/callback', 'Auth\AuthController@handleProviderCallback');

// The API Routes
Route::group(['prefix' => 'api/v1', 'name' => 'api', 'namespace' => 'Api', 'middleware' => 'jwt.auth'], function() {
	Route::get('/me', 'MeController@index');
	Route::get('/friends', 'FriendsController@index');
	Route::get('/', function() {
		return response()->json(['something' => 1]);
	});
});

// Send any other get requests to the React view.
Route::get('/{any}', function() {
	return view('index');
})->where('any', '.*');
