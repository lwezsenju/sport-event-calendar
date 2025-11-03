<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Event::class;

    public function definition(): array
    {
        return [
            'event_date' => $this->faker->dateTimeBetween('+1 week', '+6 months'),
            'description' => $this->faker->sentence,
            'team_a_id' => \App\Models\Team::factory(),
            'team_b_id' => \App\Models\Team::factory(),
            'venue_id' => \App\Models\Venue::factory(),
        ];
    }
}
