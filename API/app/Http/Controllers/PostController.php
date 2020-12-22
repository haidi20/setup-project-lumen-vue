<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Post;

use Carbon\Carbon;

class PostController extends Controller
{
    public function index()
    {
        $perPage = request("per_page", 5);

        try {
            $posts = Post::search()
                ->orderBy('date', 'desc')
                ->paginate($perPage);

            return $posts;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function store()
    {
        try {
            $post = new Post;
            $post->title = request('title');
            $post->date = Carbon::now();
            $post->author = request('author');
            $post->save();

            // return "Data Berhasil Dikirim";
            return $post;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function update($id)
    {
        try {
            $post = Post::find($id);
            $post->title = request('title');
            // $post->date = request('date');
            $post->author = request('author');
            $post->save();

            // return "Data Berhasil Dikirim";
            return $post;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function delete($id)
    {
        try {
            $post = Post::find($id);
            $post->delete();

            return "Data Berhasil Dihapus";
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
