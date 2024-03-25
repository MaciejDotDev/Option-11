<?php

use App\Events\StockLowEvent;
use App\Http\Controllers\AdminRefundsController;
use App\Http\Controllers\Auth\AdminPasswordController;
use App\Http\Controllers\CheckStock;
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
use App\Http\Controllers\PartCheckController;
use App\Http\Controllers\ReturnProductController;
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

Route::get('/returnProduct', function () {
    return Inertia::render('ReturnProduct');
});
Route::get('/updateAccount', function () {



    return Inertia::render('UpdateAccount');
})->middleware(['auth', 'verified'])->name('updateAccount');





Route::get('/BikeProducts', [ShowBikesController::class, 'showAll'])->name('products');
Route::get('/AccessoryProducts', [ShowAccessoriesController::class, 'showAll'])->name('accessoryProducts');


//get indivudal products
Route::get('/accessory/{productid}', [ShowAccessoriesController::class, 'showIndividual'])->name('individualAccessory');
Route::get('/bike/{bikeid}', [ShowBikesController::class, 'showIndividual'])->name('individualBike');
Route::get('/clothing/{productid}', [ShowClothingController::class, 'showIndividual'])->name('individualClothing');
Route::get('/bikepart/{productid}', [ShowBikePartsController::class, 'showIndividual'])->name('individualBikePart');
Route::get('/repairkit/{productid}', [ShowRepairKitsController::class, 'showIndividual'])->name('individualRepairKit');



//get bike data through axios
Route::get('/api/accessorieSearch', [ShowAccessoriesController::class, 'search'])->name('accessoriessearch');
Route::get('/api/clothingsearch', [ShowClothingController::class, 'search'])->name('clothingsearch');
Route::get('/api/repairKitsearch', [ShowRepairKitsController::class, 'search'])->name('repairKitsearch');
Route::get('/api/productsparts', [ShowBikePartsController::class, 'search'])->name('productsparts');
Route::get('/api/bikesearch', [ShowBikesController::class, 'search'])->name('bikesearch');







Route::get('/confirmedOrder', function () {
    return Inertia::render('ConfirmedReturnedOrder');
});





Route::get('/aboutus', function () {
    return Inertia::render('AboutUs');
});

//squob work below


Route::get('/BikeProducts', [ShowBikesController::class, 'showAll'])->name('products');

Route::get('/BikeParts', [ShowBikePartsController::class, 'showAll'])->name('BikeParts');

Route::get('/AccessoryProducts', [ShowAccessoriesController::class, 'showAll'])->name('accessoryProducts');

Route::get('/RepairKits', [ShowRepairKitsController::class, 'showAll'])->name('repairKits');

Route::get('/Clothing', [ShowClothingController::class, 'showAll'])->name('clothing');




Route::get('/api/checkCompatibility/{product1}/{product2}', [PartCheckController::class, 'checkCompatibility']);





//webhook for webhook calls transactions
Route::match(['get', 'post'], '/webhook', [PaymentDetails::class, 'webhook'])->name('webhook');



// to add to teh middleware later

Route::middleware('auth')->group(function () {
//bikeid check
Route::get('/api/bikecheck/{id}', [PartCheckController::class, 'check'])->name('bikecheck');
    Route::get('/api/check/stock', [CheckStock::class, 'checkStock'])->name('checkstock');

    //using axios
    Route::post('/api/user/update', [ManageAccount::class, 'updateAccount'])->name('adminUpdateUser');

    Route::get('/refund/{itemid}', [ReturnProductController::class, 'showReturnForm'])->name('showReturnForm');
    Route::post('/create/refund', [ReturnProductController::class, 'createRefund'])->name('createRefund');

    Route::get('/RepairBooking', [ShowRepairBookingController::class, 'showAll'])->name('repairBooking');
    Route::get('deleteAccount', [ManageAccount::class, 'destroy'])->name('deleteAccount');
    Route::get('/dashboard', [ManageAccount::class, 'create'])->name('dashboard');


    Route::get('/basket', [ManageBasketController::class, 'getBasket'])->name('basket');
    Route::match (['get', 'post'], '/addBasket', 'App\Http\Controllers\ManageBasketController@addBasket')->name('addBasket');
    Route::match (['get', 'post'], '/deleteProduct', 'App\Http\Controllers\ManageBasketController@deleteProduct')->name('deleteProduct');
    Route::post('/basket/action', [ManageBasketController::class, 'addRemItem'])->name('basketAction');

    Route::match (['get', 'post'], '/addPayment', [PaymentDetails::class, 'stripeCheckout'])->name('addPayment');


    Route::get('/orderTrack/{trackingid}/{productid}', [TrackingController::class, 'show'])->name('orderTrack');
    Route::get('/viewProduct/{productid}', [TrackingController::class, 'viewProduct'])->name('viewProduct');

    Route::post('/createReview', [ReviewsController::class, 'createReview'])->name('createReview');



    Route::match (['get', 'post'], '/success', 'App\Http\Controllers\PaymentDetails@finalizeOrder')->name('success');
    Route::match (['get', 'post'], '/cancel', 'App\Http\Controllers\PaymentDetails@cancel')->name('cancel');


    Route::get('/profileEdit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/wishlist/add/{productid}', [WishlistController::class, 'add'])->name('wishlist');

    Route::post('/wishlist/remove', [WishlistController::class, 'remove'])->name('wishlist.remove');

});






///admin middleware below
Route::group(['middleware' => 'fw-block-blacklisted'], function () {
    Route::group(['middleware' => ['admin']], function () {

        Route::get('/admin/refunds', [AdminRefundsController::class,'AdminViewRedunds'])->name('adminReportsShow');
        Route::get('/admin/refunds/edit/{refundid}', [AdminRefundsController::class,'updateShow'])->name('updateShowRefund');

        Route::post('/admin/refunds/edit/update', [AdminRefundsController::class,'update'])->name('updateRefund');

        Route::put('/admin/password', [AdminPasswordController::class, 'update'])->name('admin.password.update');

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

        Route::post('/ordersItem/Item/delete', [AdminEditOrders::class, 'deleteOrderItem'])->name('deleteOrderItem');

        Route::get('/addressView{addressid}', [AdminEditAddress::class, 'show'])->name('addressView');

        Route::get('/address', [AdminEditAddress::class, 'view'])->name('address');

        Route::post('/updateAddress', [AdminEditAddress::class, 'update'])->name('updateAddress');
        Route::post('/createProduct', [AdminEditProductsController::class, 'create'])->name('createProduct');

        Route::get('/adminDashboard', [AdminDashboardController::class, 'dashboard'])->name('adminDashboard');


        Route::get('/api/adminNotifications', [AdminDashboardController::class, 'notifications'])->name('adminNotifications');


        Route::get('/api/adminLogs', [AdminDashboardController::class, 'logs'])->name('adminLogs');

        Route::get('/adminUsers', [AdminEditUsersController::class, 'show'])->name('adminUsers');
        Route::get('/adminProducts', [AdminEditProductsController::class, 'show'])->name('adminProducts');

        Route::match (['get', 'post'], '/remEditProduct', [AdminEditProductsController::class, 'userManageAction'])->name('remEditProduct');

        Route::get('/adminDeleteUsers{userid}', [AdminEditUsersController::class, 'delete'])->name('adminDeleteUsers');

        Route::get('/adminViewUser{userid}', [AdminEditUsersController::class, 'viewUser'])->name('adminViewUser');

        Route::post('/admin/user/update', [AdminEditUsersController::class, 'update'])->name('adminUpdateUser');
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
});

Route::group(['middleware' => ['admin.guest']], function () {




    Route::get('/adminLogin', [AdminLoginController::class, 'create'])->name('adminLogin');
    Route::post('/adminLogin', [AdminLoginController::class, 'store']);





});


require __DIR__ . '/auth.php';
