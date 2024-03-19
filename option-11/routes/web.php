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
use App\Http\Controllers\IndividualProductController;
use App\Http\Controllers\ShowRepairBookingController;
use App\Http\Controllers\ShowOrdersController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminEditUsersController;
use App\Http\Controllers\AdminEditProductsController;
use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\CsvExporter;
use App\Http\Controllers\AdminReportsController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\AdminEditOrders;
use App\Http\Controllers\AdminEditAddress;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrackingController;
use App\Http\Controllers\AdminStockUpdate;

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

Route::get('/accessory/{productid}', [ShowAccessoriesController::class, 'showIndividual'])->name('individualAccessory');

Route::get('/bike/{bikeid}', [ShowBikesController::class, 'showIndividual'])->name('individualBike');




Route::match(['get', 'post'], '/filter/{type}', 'App\Http\Controllers\ShowBikesController@filter')->name('filter');
Route::match(['get', 'post'],'update', [ManageAccount::class, 'update'])->name('update');







Route::get('/addresses', function () {
    return Inertia::render('ViewAddress');
})->middleware(['auth', 'verified'])->name('addresses');


Route::get('/aboutus', function () {
    return Inertia::render('AboutUs');
});


Route::get('/BikeProducts', [ShowBikesController::class, 'showAll'])->name('products');
//squob work below
Route::get('/BikeParts', [ShowBikePartsController::class, 'showAll'])->name('BikeParts');

Route::get('/AccessoryProducts', [ShowAccessoriesController::class, 'showAll'])->name('accessoryProducts');

Route::get('/RepairKits', [ShowRepairKitsController::class, 'showAll'])->name('repairKits');

Route::get('/Clothing', [ShowClothingController::class, 'showAll'])->name('clothing');


Route::get('/RepairBooking', [ShowRepairBookingController::class, 'showAll'])->name('repairBooking');
Route::get('/product/{id}', [IndividualProductController::class, 'product'])->name('product');


Route::group(['middleware' => ['admin']], function () {


    Route::get('/addProduct', function () {
        return Inertia::render('AdminAddProduct');
    })->name('addProduct');



    Route::get('/editOrder{orderid}', [AdminEditOrders::class, 'editOrder'])->name('editOrder');

    Route::post('/updateOrder', [AdminEditOrders::class, 'updateOrder'])->name('updateOrder');



    Route::match (['get', 'post'], '/deleteOrder{orderid}', [AdminEditOrders::class, 'deleteOrder'])->name('deleteOrder');

    Route::get('/admin/orders', [AdminEditOrders::class, 'show'])->name('orders');

    Route::get('/ordersItems{orderid}', [AdminEditOrders::class, 'getOrderItems'])->name('viewOrderItems');


    Route::get('/ordersItem/Item{itemOrderid}', [AdminEditOrders::class, 'editItemOrderPage'])->name('editItemOrderPage');

    Route::post('/ordersItem/Item/update', [AdminEditOrders::class, 'editOrderItem'])->name('editOrderItem');

    Route::get('/addressView{addressid}', [AdminEditAddress::class, 'show'])->name('addressView');

    Route::get('/address', [AdminEditAddress::class, 'view'])->name('address');

    Route::post('/updateAddress', [AdminEditAddress::class, 'update'])->name('updateAddress');
    Route::post('/createProduct', [AdminEditProductsController::class, 'create'])->name('createProduct');

    Route::get('/adminDashboard', [AdminDashboardController::class, 'dashboard'])->name('adminDashboard');
    Route::get('/api/adminNotifications', [AdminDashboardController::class, 'notifications'])->name('adminNotifications');

    Route::get('/adminUsers', [AdminEditUsersController::class, 'show'])->name('adminUsers');
    Route::get('/adminProducts', [AdminEditProductsController::class, 'show'])->name('adminProducts');

    Route::match (['get', 'post'], '/remEditProduct', [AdminEditProductsController::class, 'userManageAction'])->name('remEditProduct');

    Route::get('/adminDeleteUsers{userid}', [AdminEditUsersController::class, 'delete'])->name('adminDeleteUsers');

    Route::get('/adminViewUser{userid}', [AdminEditUsersController::class, 'viewUser'])->name('adminViewUser');

    Route::post('/updateUser', [AdminEditUsersController::class, 'update'])->name('adminUpdateUser');

    Route::get('/editProducts{productid}', [AdminEditProductsController::class, 'updateShow'])->name('editProducts');




    Route::get('users/all/export/', [AdminReportsController::class, 'exportStatsUsers']);
    Route::get('products/export/', [AdminReportsController::class, 'exportProducts']);
    Route::get('users/stats/export/', [AdminReportsController::class, 'exportUsersStats']);
    Route::get('products/stats/export/', [AdminReportsController::class, 'exportStatsProducts']);

    Route::get('/adminReports', [AdminReportsController::class, 'show'])->name('adminReports');


    Route::match (['get', 'post'], '/adminLogout', [AdminLoginController::class, 'destroy'])
        ->name('adminLogout');

        Route::post('/adminStockUpdate', [AdminStockUpdate::class, 'update'])->name('adminStockUpdate');




    Route::get('/adminStockUpdateshow', [AdminStockUpdate::class, 'show'])->name('adminStockUpdateshow');

});
Route::group(['middleware' => ['admin.guest']], function () {




    Route::get('/adminLogin', [AdminLoginController::class, 'create'])->name('adminLogin');
    Route::post('/adminLogin', [AdminLoginController::class, 'store']);





});


Route::match(['get', 'post'], '/webhook', [PaymentDetails::class, 'webhook'])->name('webhook');



Route::get('/reviews', [ReviewsController::class, 'showAll'])->name('reviews'); // to add to teh middleware later

Route::middleware('auth')->group(function () {

    Route::get('deleteAccount', [ManageAccount::class, 'destroy'])
        ->name('deleteAccount');

    Route::get('/dashboard', [ManageAccount::class, 'create'])
        ->name('dashboard');
    Route::get('/basket', [ManageBasketController::class, 'search'])->name('basket');
    Route::match (['get', 'post'], '/addBasket', 'App\Http\Controllers\ManageBasketController@addBasket')->name('addBasket');



    Route::match (['get', 'post'], '/addPayment', [PaymentDetails::class, 'addPayment'])->name('addPayment');



    Route::get('/orderTrack{trackingid}', [TrackingController::class, 'show'])->name('orderTrack');


    Route::post('/createReview', [ReviewsController::class, 'createReview'])->name('createReview');
    Route::match (['get', 'post'], '/deleteProduct', 'App\Http\Controllers\ManageBasketController@deleteProduct')->name('deleteProduct');

    Route::post('/basket/action', [ManageBasketController::class, 'addRemItem'])->name('basketAction');




    Route::match (['get', 'post'], '/checkout', 'App\Http\Controllers\PaymentDetails@payment')->name('checkout');

    Route::match (['get', 'post'], '/success', 'App\Http\Controllers\PaymentDetails@finalizeOrder')->name('success');
    Route::match (['get', 'post'], '/cancel', 'App\Http\Controllers\PaymentDetails@cancel')->name('cancel');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/wishlist/add', [WishlistController::class, 'add'])->name('wishlist');

    Route::post('/wishlist/remove', [WishlistController::class, 'remove'])->name('wishlist.remove');

});

require __DIR__ . '/auth.php';
