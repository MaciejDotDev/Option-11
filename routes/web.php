<?php

use App\Http\Controllers\ShowAccessoriesController;
use App\Http\Controllers\ManageAccount;
use App\Http\Controllers\ManageBasketController;
use App\Http\Controllers\ShowBikesController;
use App\Http\Controllers\ShowBikePartsController;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/updateAccount', function () {



    return Inertia::render('UpdateAccount');
})->middleware(['auth', 'verified'])->name('updateAccount');





//Route::get('/products', [ShowBikesController::class, 'showAll'])->name('products');

Route::post('update', [ManageAccount::class, 'update'])->name('update');


Route::get('/BikeProducts', [ShowBikesController::class, 'showAll'])->name('products');

Route::get('BikeParts', [ShowBikePartsController::class, 'showAll'])->name('BikeParts');

Route::get('/AccessoryProducts', [ShowAccessoriesController::class, 'showAll'])->name('accessoryProducts');

Route::get('testPage', function () {
    return Inertia::render('TestPage');
})->name('testPage');






Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');





Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('deleteAccount', [ManageAccount::class, 'destroy'])
    ->name('deleteAccount');
    Route::get('/basket', [ManageBasketController::class, 'search'])->name('basket');
    Route::post('/addBasket', [ShowBikesController::class, 'addBasket'])->name('addBasket');;
});

require __DIR__.'/auth.php';
