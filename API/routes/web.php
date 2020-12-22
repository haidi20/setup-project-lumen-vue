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

$router->get('/api/data', function () use ($router) {
    // return 'keren';
    return base64_encode(str_random(32)) . PHP_EOL;
});

$router->get('/api/posts',  ['uses' => 'PostController@index']);
$router->post('/api/posts',  ['uses' => 'PostController@store']);
$router->put('/api/posts/{id}',  ['uses' => 'PostController@update']);
$router->delete('/api/posts/{id}',  ['uses' => 'PostController@delete']);
