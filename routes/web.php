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

Route::post('formSubmit','App\Http\Controllers\ProductController@formSubmit');
Route::post('updateProduct','App\Http\Controllers\ProductController@updateProduct');
Route::post('retrieveProduct','App\Http\Controllers\ProductController@retrieveProduct');
Route::post('retrieveOneProduct','App\Http\Controllers\ProductController@retrieveOneProduct');
Route::post('retrieveAllProduct','App\Http\Controllers\ProductController@retrieveAllProduct');
Route::post('updateStatusProduct','App\Http\Controllers\ProductController@updateStatusProduct');

Route::post('addCategory','App\Http\Controllers\AddCategoryController@addCategory');
Route::post('updateCategory','App\Http\Controllers\AddCategoryController@updateCategory');
Route::post('retrieveCategory','App\Http\Controllers\AddCategoryController@retrieveCategory');

Route::post('addCustomer','App\Http\Controllers\CustomerDetailsController@insertCustomer');

Route::post('addOrder','App\Http\Controllers\OrderController@addOrder');
Route::post('updateStatus','App\Http\Controllers\OrderController@updateStatus');
Route::post('deleteOrder','App\Http\Controllers\OrderController@deleteOrder');
Route::post('retrieveOrder','App\Http\Controllers\OrderController@retrieveOrder');
Route::post('retrieveWholeOrder','App\Http\Controllers\OrderController@retrieveWholeOrder');

Route::post('addingAddOns','App\Http\Controllers\AddAddOnsController@addAddons');
Route::post('retrievingAddOns','App\Http\Controllers\AddAddOnsController@retrieveAddOns');
Route::post('updateStatusAddOns','App\Http\Controllers\AddAddOnsController@updateStatusAvailable');
Route::post('updateAddOns','App\Http\Controllers\AddAddOnsController@updateAddOns');
Route::post('retrieveOneAddOn','App\Http\Controllers\AddAddOnsController@retrieveOneAddOn');

Route::post('addingCupType','App\Http\Controllers\CupTypeController@addingCupType');
Route::post('retrieveCupType','App\Http\Controllers\CupTypeController@retrieveCupType');
Route::post('updateAvailableCupType','App\Http\Controllers\CupTypeController@updateAvailableCupType');
Route::post('editingCupType','App\Http\Controllers\CupTypeController@editingCupType');

Route::post('addCheckout','App\Http\Controllers\StoreCheckoutsController@addCheckout');
Route::post('retrieveCheckouts','App\Http\Controllers\StoreCheckoutsController@retrieveCheckouts');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('user', 'App\Http\Controllers\UserController@getAuthenticatedUser');
});
 