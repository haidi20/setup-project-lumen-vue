<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Post;

class PostController extends Controller
{
    public function index()
    {
        $perPage = request("per_page", 5);

        try {
            $posts = Post::search()
                ->paginate($perPage);

            return $this->responseWithSuccess($posts);
        } catch (\Throwable $th) {
            return $this->responseWithError($th);
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

            return $this->responseWithSuccess("Data Berhasil Dihapus");
        } catch (\Throwable $th) {
            return $this->responseWithError($th);
        }
    }
}
