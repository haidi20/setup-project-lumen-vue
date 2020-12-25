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
        $date = Carbon::now()->setTimezone("Asia/Singapore");
        $dateNow = $date->format('Y-m-d H:i:s');

        $token = app('auth')->attempt($request->only('username', 'password'));
        $login = User::where(["username" => $request->username])->first();

        if (app()->make('hash')->check($request->password, $login->password)) {
            $user = User::where(["username" => $request->username]);
            $user->update([
                'status_login' => true,
                'token' => $token
            ]);
            $user = $user->first();

            $authToken = new AuthToken();
            $authToken->user_id = $user->pid;
            $authToken->token = $user->token;
            $authToken->created_at = $dateNow;
            $authToken->updated_at = $dateNow;
            $authToken->expired_at = $date->addMinutes(10);
            $authToken->save();

            if ($token != null) {
                $token = $token;
            } else {
                $token = null;
            }
    
            $data = [
                "time" => 300,
                "user" => $user,
                "token" => $token,
                "success" => true,
                "remarks" => "Success Login",
            ];

            return $data;
            // return $this->responseWithSuccess($data);
        }

        $data = [
            "time" => 0,
            "user" => null,
            "token" => null,
            "success" => false,
            "remarks" => "Username or Password entered is incorrect.",
        ];

        return $data;
        // return $this->responseWithError($data);
    }
}
