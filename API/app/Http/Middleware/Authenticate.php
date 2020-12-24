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
            $check_token = AuthToken::where([
                ['token', '=' , $token], 
                ['expired_at', '<=' , $dateNow],
            ])->first();

            if ($check_token) {
                $res['success'] = false;
                $res['message'] = 'Permission not allowed!';

                return response($res);
            }            
        }else{
            $res['success'] = false;
            $res['message'] = 'Login please!';

            return response($res);
        }

        return $next($request);
    }
}
