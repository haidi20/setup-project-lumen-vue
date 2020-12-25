<?php
namespace App\Http\Middleware;

use App\Models\Participant;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;

use Carbon\Carbon;

use App\AuthToken;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;
    protected $request;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth, Request $request)
    {
        $this->auth = $auth;
        $this->request = $request;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $date = Carbon::now()->setTimezone("Asia/Singapore");
        $dateNow = $date->format('Y-m-d H:i:s');
        
        if ($request->bearerToken()) {
            $token = $request->bearerToken();
            $checkToken = AuthToken::where('token', '=' , $token)->count();
            $checkExpiredToken = AuthToken::where(
                [['token', '=' , $token],
                ['expired_at', '>' , $dateNow]]
            )->count();

            if($checkToken == 0) {
                $data = [
                    "success" => false,
                    "data" => "invalid",
                    "coba" => $checkExpiredToken,
                    "remarks" => 'Sorry, Your Token not Registered.',
                ];

                return $data;
            } 
            
            if($checkExpiredToken == 0){
                $data = [
                    "success" => false,
                    "data" => "expired",
                    "coba" => $checkExpiredToken,
                    "remarks" => 'Sorry, Your Session has Expired.',
                ];

                return $data;
                // return response($data);
            }           
        }else{
            $response = [
                "success" => false,
                "data" => "permission",
                "remarks" => 'Login Please!.',
            ];

            return $response;
            // return response($response);
        }

        return $next($request);
    }
}
