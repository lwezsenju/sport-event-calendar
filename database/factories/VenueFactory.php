<?php

namespace Database\Factories;

use App\Models\Venue;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Venue>
 */
class VenueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Venue::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->company . ' Arena',
            'location' => $this->faker->city,
            'capacity' => $this->faker->numberBetween(5000, 50000),
        ];
    }
}
