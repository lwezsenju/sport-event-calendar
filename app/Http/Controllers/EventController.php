<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Sport;
use App\Models\Team;
use App\Models\Venue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::with(['teamA', 'teamB', 'venue', 'sport'])->get();
        $teams = Team::all();
        $venues = Venue::all();
        $sports = Sport::all();
        return Inertia::render('events/index', [
            'events' => $events,
            'teams' => $teams,
            'venues' => $venues,
            'sports' => $sports,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'event_date' => 'required|date',
            'description' => 'required|string|max:255',
            'sport_id' => 'required|exists:sports,id',
            'team_a_id' => 'required|exists:teams,id',
            'team_b_id' => 'required|exists:teams,id|different:team_a_id',
            'venue_id' => 'required|exists:venues,id',
        ]);

        unset($validated['sport_id']);

        Event::create($validated);

        return $this->backWith('success', 'Event created successfully.');
    }
}
