<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\User;

class UserController extends Controller
{
    public function userLogin(Request $request){
        $input=$request->all();
        $user_id=$input['user_id'];
        $password=sha1($input['password']);
        $user=User::where([['studentId','=',$user_id],['password','=',$password]])->get();
        if($user->count()>0){
            $result = response()->json([
                'success' => true,
                'data' => $user->first()
            ]);
        }else{
            $result = response()->json([
                'success' => false,
                'message' => 'Incorrect Username / Password'
            ]);
        }
        return $result;
    }

}
