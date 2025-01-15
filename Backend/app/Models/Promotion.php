<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use HasFactory;

    protected $fillable = [
        'point',
        'tier',
        'benefit',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function voucher() {
        return $this->hasMany(Voucher::class);
    }
}
