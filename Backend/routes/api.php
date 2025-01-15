<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/article', App\Http\Controllers\ArticlesController::class);
// Route::apiResource('/users', App\Http\Controllers\UserController::class);
Route::apiResource('/brand', App\Http\Controllers\BrandController::class);
Route::apiResource('/category', App\Http\Controllers\CategoriesController::class);
Route::apiResource('/promotion', App\Http\Controllers\PromotionController::class);
Route::apiResource('/voucher', App\Http\Controllers\VoucherController::class);

Route::get('/users', [UserController::class, 'GetAllData']);
Route::post('/register', [UserController::class, 'Register']);
Route::post('/login', [UserController::class, 'Login']);
Route::post('/logout', [UserController::class, 'Logout'])->middleware('auth:api');
