<?php

namespace App\Http\Controllers;

use App\Models\Sport;
use Illuminate\Http\Request;

class SportController extends Controller
{
    //
    public function index()
    {
        $sports = Sport::all();
        return inertia('sports/index', [
            'sports' => $sports,
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:sports,name',
        ]);

        $sport = Sport::create($validated);

        return $this->backWith('success', 'Sport created successfully.');
    }
}
