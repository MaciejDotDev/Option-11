<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;

class AddressController extends Controller
{
    public function index()
    {
        return Address::all();
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'postcode' => 'required|max:9',
            'country' => 'required|max:15',
            'city' => 'required|max:15',
            'street' => 'required|max:15',
            'house_no' => 'nullable|max:8',
        ]);
        return Address::create($validatedData);
    }
      
}
