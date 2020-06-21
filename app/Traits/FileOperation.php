<?php
namespace App\Traits;
use Illuminate\Http\Request;
use File;

trait FileOperation
{
    public function uploadFile(Request $request, $key, $directory){
        $file_name='';
        if($request->hasFile($key)){
            $file=$request->file($key);
            $file_name=time().".".$file->getClientOriginalExtension();
            $file->move(public_path($directory),$file_name);
        }
        return $file_name;
    }

    public function getFileLink($file_name, $directory, $is_profile=0){
        if(strlen($file_name)<100){  // if it is real file name
            if((is_null($file_name) || $file_name=='') && $is_profile==1)
                $file_name='avatar.png';
            return url("public/$directory/$file_name");
        }else{  // if it is base 64 based
            return $file_name;
        }
    }

    public function deleteFile($file_name, $directory){
        $file_path = public_path("$directory/$file_name"); // app_path("public/test.txt");
        if(File::exists($file_path))
            File::delete($file_path);
    }

}
