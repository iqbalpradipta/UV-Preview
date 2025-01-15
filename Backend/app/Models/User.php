<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'numberPhone',
    ];

    public function promotion() {
        return $this->hasOne(Promotion::class);
    }

    public function article() {
        return $this->hasMany(Article::class);
    }
}
