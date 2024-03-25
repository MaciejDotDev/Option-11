<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RequirePassword
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $requiredPassword = 'your_password_here';

        // Check if the password is provided in the request
        if ($request->input('password') !== $requiredPassword) {
            // If the password is not correct, redirect the user to a specific route
            return redirect()->back()->withErrors(['password' => 'password is incorrect!']);
        }
        return $next($request);
    }
}
