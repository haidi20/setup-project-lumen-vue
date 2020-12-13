<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Post extends Model
{
    public function scopeSearch($query) {
        return $query->where('title', 'like', '%'.request('search').'%');
    }
}