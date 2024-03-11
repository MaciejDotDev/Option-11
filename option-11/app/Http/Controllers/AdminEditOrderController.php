<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminEditOrderController extends Controller
{
    public function showAdminEditOrderPage(Request $request)
    {
        return Inertia::render('AdminEditOrder');
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> dff58cfa8409bec97d6cb4bdbc29964178bb75db
