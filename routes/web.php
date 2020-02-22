<?php

Route::get('/', function (){
    return view('welcome');
});

Route::get('{anyExceptRoot}', function() {
    return redirect('/');
})->where('anyExceptRoot', '[^/]*');
