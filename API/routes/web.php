<?php

use \Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('/login', 'AuthController@login');

$router->get('/buy',  'MidtransController@index');
$router->post('/notification',  'MidtransController@notification');
$router->get('/completed',  'MidtransController@completed');
$router->get('/unfinish',  'MidtransController@unfinish');
$router->get('/failed',  'MidtransController@failed');

$router->group(['prefix' => '/api', 'middleware' => 'auth'], function () use ($router) {
    $router->get('/posts',  ['uses' => 'PostController@index']);
    $router->post('/posts',  ['uses' => 'PostController@store']);
    $router->put('/posts/{id}',  ['uses' => 'PostController@update']);
    $router->delete('/posts/{id}',  ['uses' => 'PostController@delete']);
});
