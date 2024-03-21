<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Inertia\Inertia;
use App\Models\Basket;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        
        $admin = Auth::guard('admin')->user();
        if (Auth::guard('web')->user()) {
            $basket = Basket::where('userid', auth()->user()->userid)->where('status', 'open')->get();
            $basketCount = count($basket);
        } else {
            $basketCount = null;
        }
 

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'admin' => [
                'admin' => $admin,
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'flash' => [
                
                'message' => fn () => $request->session()->get('success')
            ],

            'baskIcon' => [

               
                'basketCount'=>$basketCount,
               
            ]
        ];
    }
}
