<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/basket', function () {
    return view('basket');
});

Route::get('/', function () {
    return view('welcome');
});

Route::match(['get', 'post'],'/','App\Http\Controllers\ShowBikesController@showAll')->name('showAll');


Route::match(['get', 'post'],'/addbasket','App\Http\Controllers\ShowBikesController@addBasket')->name('addBasket')->middleware('auth');

/*
middleware funciton above allows to use the route only if logged in
|
*/
Auth::routes();

Route::get('/basket', [App\Http\Controllers\ManageBasketController::class, 'search'])->name('basket');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::fallback(function() {
    return view(welcome);
});
