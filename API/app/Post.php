<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function searchAbleColumn()
    {
        return ['title', 'author', 'date'];
    }

    public function scopeSearch($query)
    {
        foreach ($this->searchAbleColumn() as $item) {
            $query->orWhere($item, 'like', '%' . request('search') . '%');
        }
    }
}
