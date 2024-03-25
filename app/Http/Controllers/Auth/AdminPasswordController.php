<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use App\Models\Admin;
class AdminPasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
                $validated = $request->validate([
                    'current_password' => ['required', 'current_password:admin'], // The ':admin' guard specifies to use the admin guard for current password validation, fixing issues related to auth guard mismatches.
                    'password' => ['required', Password::defaults(), 'confirmed'],
                ]);

                $adminUserId = auth()->guard('admin')->id();

                Admin::where('adminid',  $adminUserId)->update([
                    'password' => Hash::make($validated['password']),
                ]);

                return redirect()->back()->with('success', "Password successfully changed!");
    }
}
