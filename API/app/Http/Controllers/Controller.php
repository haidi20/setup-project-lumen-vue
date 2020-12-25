<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' =>  app('auth')->factory()->getTTL() * 60
        ], 200);
    }

    protected function responseWithSuccess($data, $remarks = '')
    {
        return response()->json([
            "data" => $data,
            "success" => true,
            "remarks" => $remarks,
        ]);
    }

    protected function responseWithError($data, $remarks = '')
    {
        return response()->json([
            "data" => $data,
            "success" => false,
            "remarks" => $remarks,
        ]);
    }
}
