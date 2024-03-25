<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\Log;
class AdminLoginController extends Controller
{
    public function create(Request $request) {
        //allows only login requests from a specific ip address, when in production change this to your device ip address


            return Inertia::render('Auth/AdminLogin');






    }

    public function store(Request $request) {
        $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if(Auth::guard('admin')->attempt($request->only('username', 'password'), $request->remember)) { // we're usning the admin guard to create a session
            session()->regenerate();
            return redirect('/adminDashboard');
        }

        throw ValidationException::withMessages([
            'username' => 'The provide credentials does not match our record.',
        ]);
    }

    public function destroy(Request $request) {
        Auth::guard('admin')->logout();

        $request->session()->forget('guard.admin'); // differnt before instead of invalidating all sessions we're only invaldating the amdin

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
