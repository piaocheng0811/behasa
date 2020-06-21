<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Group(['prefix'=>'user'], function (){
    Route::post('login','UserController@userLogin');
    Route::post('userRegister','UserController@userRegister');
    Route::get('get_language_categories','CategoryController@getLanguageCategories');
    Route::get('testConfig','TestController@getTestConfig');
    Route::post('loadTest','TestController@loadTest');

});

Route::Group(['prefix'=>'admin'], function (){
    Route::post('login','UserController@adminLogin');
    Route::post('GetUsersData','UserController@adminGetUsersData');
    Route::post('GetUsers','UserController@adminGetUsers');
    Route::post('GetCategory','UserController@adminGetCategory');
    Route::post('getLanguage','UserController@adminGetLanguageData');
    Route::post('CreateUser','UserController@admincreateUser');
    Route::get('ViewUser/{id}','UserController@adminViewUser');
    Route::post('ChangeRole','UserController@adminChangeRole');
    Route::post('EditUser','UserController@adminEditUser');
    Route::post('GetCategories','UserController@adminGetCategories');
    Route::post('ChangeCategoryStatus','UserController@adminChangeCategoryStatus');
    Route::post('EditCategory','UserController@adminEditCategory');
    Route::post('CreateCategory','UserController@adminCreateCategory');
    Route::get('GetCategoryData/{category_id}','UserController@adminGetCategoryData');
    Route::post('GetTopicArea','UserController@adminGetTopicArea');
    Route::get('GetTopicAreaData/{topic_id}','UserController@adminGetTopicAreaData');
    Route::post('EditTopicArea','UserController@adminEditTopicArea');
    Route::post('CreateTopicArea','UserController@adminCreateTopicArea');
    Route::post('DeleteTopicArea','UserController@adminDeleteTopicArea');
    Route::post('GetQuestionsCount','UserController@adminGetQuestionsCount');
    Route::post('GetQuestions','UserController@adminGetQuestions');
    Route::post('loadTestConfig','UserController@adminLoadTestConfig');
    Route::post('EditTestConfig','UserController@adminEditTestConfig');
    Route::post('GetQuestionData','UserController@adminGetQuestionData');
    Route::post('GetQuestionTransData','UserController@adminGetQuestionTransData');
    Route::post('GetLogs','UserController@adminGetLogs');
    Route::post('GetResult','UserController@adminGetResult');
    Route::post('GetReport','UserController@adminGetReport');
});


