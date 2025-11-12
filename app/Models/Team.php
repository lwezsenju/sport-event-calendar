<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['name', 'sport_id'];
    use HasFactory;
    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class, 'team_a_id')
                    ->orWhere('team_b_id', $this->id);
    }
}
