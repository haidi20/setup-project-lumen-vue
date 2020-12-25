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

            return $this->responseWithSuccess($posts);
        } catch (\Throwable $th) {
            return $this->responseWithError($th, "Sorry, can not access data");
        }
    }

    public function store()
    {
        $dateNow = Carbon::now()->setTimezone("Asia/Singapore")->format('Y-m-d H:i:s');

        try {
            $post = new Post;
            $post->title = request('title');
            $post->date = $dateNow;
            $post->author = request('author');
            $post->save();

            // return "Data Berhasil Dikirim";
            return $this->responseWithSuccess($post);
        } catch (\Throwable $th) {
            return $this->responseWithError($th, "Sorry, can not Send Data");
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
            return $this->responseWithSuccess($post);
        } catch (\Throwable $th) {
            return $this->responseWithError($th, "Sorry, can not Update Data");
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
