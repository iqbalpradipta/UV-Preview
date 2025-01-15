<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'stock',
        'image',
        'type',
    ];

    protected function image(): Attribute {
        return Attribute::make(
            get: fn($image) => url('/storage/vouchers' . $image),
        );
    }

    public function promotion() {
        return $this->belongsTo(Promotion::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    protected function brand() {
        return $this->belongsTo(Brand::class);
    }

}
