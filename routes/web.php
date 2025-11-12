<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\VenueController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [EventController::class, "index"])->name('home');
Route::post('/events', [EventController::class, "store"])->name('events.store');
Route::get('/venues', [VenueController::class, "index"])->name('venues.index');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
