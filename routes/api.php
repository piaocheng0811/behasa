<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Group(['prefix'=>'user'], function (){
    Route::post('login','UserController@userLogin');
});

