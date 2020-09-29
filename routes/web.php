<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{any}', 'App\Http\Controllers\PageController@index')->where('any', '.*');
Route::post('register', 'App\Http\Controllers\UserController@register');
Route::post('login', 'App\Http\Controllers\UserController@authenticate');
Route::post('tokenRefresh', 'App\Http\Controllers\UserController@tokenRefresh');
Route::post('deaunthenticate', 'App\Http\Controllers\UserController@deaunthenticate');
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('user', 'App\Http\Controllers\UserController@getAuthenticatedUser');
});
 