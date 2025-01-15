<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriesResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController
{
    public function index() {
        $categories = Category::latest();

        return new CategoriesResource(true, 'Success get data Category', $categories);
    }
}
