<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Carbon\Carbon;

use App\User;
use App\AuthToken;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $dateNow = Carbon::now()->setTimezone("Asia/Singapore")->format('Y-m-d H:i:s');

        $token = app('auth')->attempt($request->only('username', 'password'));
        // $insert = $request->only('name', 'password');

        $login = User::where(["username" => $request->username])->first();

        $user = "";

        if (app()->make('hash')->check($request->password, $login->password)) {
            $user = User::where(["username" => $request->username]);
            $user->update(['token' => $token]);
            $user = $user->first();

            $authToken = new AuthToken();
            $authToken->user_id = $user->pid;
            $authToken->token = $user->token;
            $authToken->created_at = $dateNow;
            $authToken->updated_at = $dateNow;
            $authToken->save();
        }

        if ($token != null) {
            $token = "bearer " . $token;
        } else {
            $token = null;
        }

        // return $this->respondWithToken($token);
        return response()->json(["token" => $token, 'pid' => $user->pid]);
    }
}
