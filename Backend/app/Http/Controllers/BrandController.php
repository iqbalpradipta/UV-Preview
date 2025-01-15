<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticlesResource;
use App\Http\Resources\BrandResource;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrandController
{
    public function index() {
        $brands = Brand::latest();

        return new BrandResource(true, 'Success get data Brands', $brands);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $brand = Brand::create([
            'name' => $request->name,
        ]);

        return new BrandResource(true, 'Success insert articles', $brand);
    }
}
