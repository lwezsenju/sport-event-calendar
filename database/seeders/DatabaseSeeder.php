<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\Sport;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::firstOrCreate(
        //     ['email' => 'test@example.com'],
        //     [
        //         'name' => 'Test User',
        //         'password' => 'password',
        //         'email_verified_at' => now(),
        //     ]
        // );
        Sport::insert([
            ['name' => 'Football'],
            ['name' => 'Ice Hockey'],
            ['name' => 'Basketball'],
            ['name' => 'Tennis'],
            ['name' => 'Volleyball'],
            ['name' => 'Handball'],
            ['name' => 'Baseball'],
            ['name' => 'Cricket'],
            ['name' => 'Rugby'],
            ['name' => 'Table Tennis'],
            ['name' => 'Badminton'],
            ['name' => 'Swimming'],
            ['name' => 'Athletics'],
            ['name' => 'Boxing'],
            ['name' => 'Wrestling'],
            ['name' => 'Cycling'],
            ['name' => 'Golf'],
            ['name' => 'Skiing'],
            ['name' => 'Snowboarding'],
            ['name' => 'Karate'],
        ]);
        Event::factory(30)->create();
    }
}
