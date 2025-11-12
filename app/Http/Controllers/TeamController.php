<?php

namespace App\Http\Controllers;

use App\Models\Sport;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    //
    public function index()
    {
        $teams = Team::with('sport')->get();
        $sports = Sport::all();
        return inertia('teams/index', [
            'teams' => $teams,
            'sports' => $sports,
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sport_id' => 'required|exists:sports,id',
        ]);

        Team::create($validated);

        return $this->backWith('success', 'Team created successfully.');
    }
}
