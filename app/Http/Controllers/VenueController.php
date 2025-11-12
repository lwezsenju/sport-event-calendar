<?php

namespace App\Http\Controllers;

use App\Models\Venue;
use Illuminate\Http\Request;

class VenueController extends Controller
{
    //
    public function index()
    {
        $venues = Venue::all();
        return inertia('venues/index', [
            'venues' => $venues,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:venues,name',
            'location' => 'required|string',
            'capacity' => 'required|integer|min:0',
        ]);

        $venue = Venue::create($validated);

        return $this->backWith('success', 'Venue created successfully.');
    }
}
