<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;
class PostController extends Controller
{
    protected $pathUpload = "image_profile/";

    public function __construct()
    {
        // app('Illuminate\Http\Request');
    }

    public function index() {
        $paged = request("paged", 1);
        $perPage = request("per_page", 5);

        $posts = Post::where('title', 'like', '%'.request('search').'%')
                      ->paginate($perPage);

        return $this->responseWithSuccess($posts);
    }
}