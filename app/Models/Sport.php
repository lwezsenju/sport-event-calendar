<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sport extends Model
{
    protected $fillable = [
        'name',
    ];
    use HasFactory;
    public function teams()
    {
        return $this->hasMany(Team::class);
    }

    public function events()
    {
        return $this->hasMany(Event::class);
    }
}
