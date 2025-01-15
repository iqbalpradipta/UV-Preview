<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticlesResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticlesController
{
    public function index() {
        $articles = Article::latest()->paginate(4);

        return new ArticlesResource(true, 'Success Get data articles',  $articles);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'content' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $image = $request->file('image');
        $image->storeAs('public/posts', $image->hashName());

        $article = Article::create([
            'title' => $request->title,
            'image' => $request->hashName(),
            'content' => $request->content,
        ]);

        return new ArticlesResource(true, 'Success Insert Articles', $article);
    }
}
