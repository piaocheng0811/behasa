<?php

namespace App\Console\Commands;

use App\Model\Testconfig;
use Illuminate\Console\Command;
use App\Model\User;
use App\Model\Category;
use App\Model\Language;
use App\Model\Questions;

class UpdateMigrate extends Command
{
    protected $signature = 'update:migration';

    protected $description = 'Update the language and category field of user table';


    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
//        $users=User::all();
//        foreach ($users as $user){
//            $category_name=$user->category;
//            if(!is_null($category_name) && $category_name!='' && strlen($category_name)>2){
//                $temps=Category::where('name',$category_name)->get();
//                if($temps->first()){
//                    $category=$temps->first();
//                    $user->category=$category->id;
//                }else{
//                    $user->category=null;
//                }
//                $user->save();
//            }
//            $language_name=$user->language;
//            if(!is_null($language_name) && $language_name!='' && strlen($language_name)>2){
//                $temps=Language::where('code',$language_name)->get();
//                if($temps->first()){
//                    $language=$temps->first();
//                    $user->language=$language->id;
//                }else{
//                    $user->language=null;
//                }
//                $user->save();
//            }
//        }


//        $test_configs=Testconfig::all();
//        foreach ($test_configs as $test_config){
//            $testcategory=$test_config->testcategory;
//            if($testcategory!=null && $testcategory!=''){
//                echo $testcategory."     ";
//                $temps=Category::where('name',$testcategory)->get();
//                if($temps->first()){
//                    $category=$temps->first();
//                    $test_config->testcategory=$category->id;
//                    echo $category->id;
//                }else{
//                    $test_config->testcategory=null;
//                }
//                $test_config->save();
//            }
//        }

//        $test_configs=Testconfig::all();
//        foreach ($test_configs as $test_config){
//            $testcategory=$test_config->testcategory;
//            if($testcategory!=null && $testcategory!=''){
//                echo $testcategory."     ";
//                $temps=Category::where('name',$testcategory)->get();
//                if($temps->first()){
//                    $category=$temps->first();
//                    $test_config->testcategory=$category->id;
//                    echo $category->id;
//                }else{
//                    $test_config->testcategory=null;
//                }
//                $test_config->save();
//            }
//        }
        $questions=Questions::all();
        foreach ($questions as $question){
            $question_category=$question->category;
            if($question_category!=null && $question_category!=''){
                $temps=Category::where('name',$question_category)->get();
                if($temps->first()){
                    $category=$temps->first();
                    $question->category=$category->id;
                }else{
                    $question_category->category=null;
                }
                $question->save();
            }
        }

    }
}
