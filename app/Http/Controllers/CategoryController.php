<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Category;
use App\Model\Language;

class CategoryController extends Controller
{
    public function getLanguageCategories(){
        $result=Array();
        $categories=Category::get();
        $languages=Language::get();
        $result['categories']=$categories;
        $result['languages']=$languages;
        return $result;
    }

}
