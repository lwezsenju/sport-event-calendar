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
}
