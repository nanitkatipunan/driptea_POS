<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('name', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    public function register(Request $request)
    {
        //validate if email already exist
        $input['name'] = $request->get('name');
        $rules = array('name' => 'unique:users,name');
        $validate = Validator::make($input, $rules);
        if ($validate->fails()) {
            return response()->json($validate->errors()->toJson(), 300);
        }

        $validator = Validator::make($request->all(), [
            'account_type' => 'required|string|max:255',
            'name' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = User::create([
            'account_type' => $request->get('account_type'),
            'name' => $request->get('name'),
            'fullname' => $request->get('fullname'),
            'address' => $request->get('address'),
            'contactNumber' => $request->get('contactNumber'),
            'password' => Hash::make($request->get('password')),
        ]);
        $token = JWTAuth::fromUser($user);
        // dd($token);
        return response()->json(compact('user','token'),201);
    }

    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }

    public function tokenRefresh(){
        $current_token = JWTAuth::getToken();
        $token = JWTAuth::refresh($current_token);
        return response()->json(compact('token'));
    }

    public function deauthenticate(){
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['token' => NULL]);
    }
}
