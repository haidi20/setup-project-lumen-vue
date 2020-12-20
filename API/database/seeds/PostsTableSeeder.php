<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

use App\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $faker->addProvider(new BlogArticleFaker\FakerProvider($faker));

        foreach (range(1, 100) as $index) {
            Post::insert([
                'title' => $faker->articleTitle,
                'author' => $faker->name,
                'date' =>  $faker->dateTime($max = 'now', $timezone = null),
            ]);
        }
    }
}
