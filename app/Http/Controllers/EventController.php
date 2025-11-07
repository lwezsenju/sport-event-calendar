<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::with(['teamA', 'teamB', 'venue', 'sport'])->get();
        return Inertia::render('events/index', [
            'events' => $events,
        ]);
    }
}
