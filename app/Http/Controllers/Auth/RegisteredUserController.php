<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Notification;
class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'firstname' => 'required|string|max:255|regex:/^[a-zA-Z ]+$/',
            'lastname' => 'required|string|max:255|regex:/^[a-zA-Z ]+$/',
            'phonenumber' => 'required|string|min:10|max:12|regex:/[0-9]{9}/',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'phonenumber' => $request->phonenumber,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $notification = new Notification();
        $notification->notification_type = "user";
        $notification->notification_title = "New user registered";
        $orderTime = \Carbon\Carbon::parse( $user->created_at)->format('d/m/Y H:i:s');

        $notification->notification_description = "user of id $user->userid has joined at $orderTime";
        $notification->save();

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}


