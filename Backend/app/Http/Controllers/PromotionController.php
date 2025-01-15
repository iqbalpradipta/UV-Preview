<?php

namespace App\Http\Controllers;

use App\Http\Resources\PromotionResource;
use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController
{
    public function index() {
        $promotion = Promotion::latest();

        return new PromotionResource(true, 'Success get data Promotion', $promotion);
    }
}
