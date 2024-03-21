<?php

use App\Http\Controllers\ManageAccount;
use App\Http\Controllers\ManageBasketController;
use App\Http\Controllers\ShowBikesController;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentDetails;
use Inertia\Inertia;
use App\Http\Controllers\ShowBikePartsController;
use App\Http\Controllers\ShowRepairKitsController;
use App\Http\Controllers\ShowAccessoriesController;
use App\Http\Controllers\ShowClothingController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ShowRepairBookingController;
use App\Http\Controllers\ShowOrdersController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminEditUsersController;
use App\Http\Controllers\AdminEditProductsController;
use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\CsvExporter;
use App\Http\Controllers\AdminReportsController;
use App\Http\Controllers\AdminEditOrderController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\AdminEditOrders;

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
        'canResetPassword' => Route::has('password.request'),
        'phpVersion' => PHP_VERSION,
        'status' => session('status')
    ]);
});

Route::get('/contactUs', function () {
    return Inertia::render('Contactus');
});
Route::get('/updateAccount', function () {



    return Inertia::render('UpdateAccount');
})->middleware(['auth', 'verified'])->name('updateAccount');





Route::get('/BikeProducts', [ShowBikesController::class, 'showAll'])->name('products');

Route::get('/AccessoryProducts', [ShowAccessoriesController::class, 'showAll'])->name('accessoryProducts');

Route::match(['get', 'post'], '/filter/{type}', 'App\Http\Controllers\ShowBikesController@filter')->name('filter');
Route::post('update', [ManageAccount::class, 'update'])->name('update');





Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/addresses', function () {
    return Inertia::render('ViewAddress');
})->middleware(['auth', 'verified'])->name('addresses');


Route::get('/BikeProducts', [ShowBikesController::class, 'showAll'])->name('products');
//squob work below
Route::get('/BikeParts', [ShowBikePartsController::class, 'showAll'])->name('BikeParts');

Route::get('/AccessoryProducts', [ShowAccessoriesController::class, 'showAll'])->name('accessoryProducts');

Route::get('/RepairKits', [ShowRepairKitsController::class, 'showAll'])->name('repairKits');

Route::get('/Clothing', [ShowClothingController::class, 'showAll'])->name('clothing');


Route::get('/RepairBooking', [ShowRepairBookingController::class, 'showAll'])->name('repairBooking');



Route::group(['middleware' => ['admin']], function () {


    Route::get('/addProduct', function () {
        return Inertia::render('AdminAddProduct');
    })->name('addProduct');



Route::get('/editOrder{orderid}', [AdminEditOrders::class, 'editOrder'])->name('editOrder');

Route::get('/orders', [AdminEditOrders::class, 'show'])->name('orders');


    Route::post('/createProduct', [AdminEditProductsController::class, 'create'])->name('createProduct');

    Route::get('/adminDashboard', [AdminDashboardController::class, 'dashboard'])->name('adminDashboard');

    Route::get('/adminUsers', [AdminEditUsersController::class, 'show'])->name('adminUsers');
    Route::get('/adminProducts', [AdminEditProductsController::class, 'show'])->name('adminProducts');

    Route::match(['get', 'post'],'/remEditProduct', [AdminEditProductsController::class, 'userManageAction'])->name('remEditProduct');

    Route::get('/adminDeleteUsers{userid}', [AdminEditUsersController::class, 'delete'])->name('adminDeleteUsers');

    Route::get('/adminViewUser{userid}', [AdminEditUsersController::class, 'viewUser'])->name('adminViewUser');



    Route::get('/editProducts{productid}', [AdminEditProductsController::class, 'updateShow'])->name('editProducts');





    Route::get('users/export/', [AdminReportsController::class, 'exportUsers']);
    Route::get('products/export/', [AdminReportsController::class, 'exportProducts']);

    Route::get('/adminReports', [AdminReportsController::class, 'show'])->name('adminReports');
    Route::match(['get', 'post'],'/adminLogout', [AdminLoginController::class, 'destroy'])
    ->name('adminLogout');








});
Route::match(['get', 'post'],'/adminStockUpdate','App\Http\Controllers\AdminStockUpdate@update')->name('adminStockUpdate');

Route::group(['middleware' => ['admin.guest']], function () {




    Route::get('/adminLogin', [AdminLoginController::class, 'create'])->name('adminLogin');
    Route::post('/adminLogin', [AdminLoginController::class, 'store']);





});

Route::stripeWebhooks('/webhook');
Route::get('/reviews', [ReviewsController::class,'showAll'])->name('reviews'); // to add to teh middleware later

Route::middleware('auth')->group(function () {

    Route::get('deleteAccount', [ManageAccount::class, 'destroy'])
        ->name('deleteAccount');
    Route::get('/basket', [ManageBasketController::class, 'search'])->name('basket');
    Route::match(['get', 'post'], '/addBasket', 'App\Http\Controllers\ShowBikesController@addBasket')->name('addBasket');
    Route::match(['get', 'post'], '/addBasketPart', 'App\Http\Controllers\ShowBikePartsController@addBasket')->name('addBasketPart');
    Route::match(['get', 'post'], '/addBasketRepairkit', 'App\Http\Controllers\ShowRepairKitsController@addBasket')->name('addBasketRepairkit');
    Route::match(['get', 'post'], '/addBasketAccessory', 'App\Http\Controllers\ShowAccessoriesController@addBasket')->name('addBasketAccessory');
    Route::match(['get', 'post'],'/addPayment', [PaymentDetails::class, 'addPayment'])->name('addPayment');
    Route::match(['get', 'post'], '/addBasketClothing', 'App\Http\Controllers\ShowClothingController@addBasket')->name('addBasketClothing');

    Route::match(['get', 'post'], '/makeOrder', 'App\Http\Controllers\OrdersController@makeOrder')->name('makeOrder');



    Route::post('/createReview', [ReviewsController::class,'createReview'])->name('createReview');
    Route::match(['get', 'post'], '/deleteProduct', 'App\Http\Controllers\ManageBasketController@deleteProduct')->name('deleteProduct');

    Route::match(['get', 'post'], '/orderHistory', 'App\Http\Controllers\OrdersController@showAll')->name('orderHistory');
    Route::post('/basket/action', [ManageBasketController::class, 'addRemItem'])->name('basketAction');



    Route::match(['get', 'post'], '/checkout', 'App\Http\Controllers\PaymentDetails@payment')->name('checkout');

    Route::match(['get', 'post'], '/success', 'App\Http\Controllers\PaymentDetails@finalizeOrder')->name('success');
    Route::match(['get', 'post'], '/cancel', 'App\Http\Controllers\PaymentDetails@cancel')->name('cancel');



});

require __DIR__ . '/auth.php';
