<?php

namespace App\Http\Controllers;

use App\Model\Language;
use App\Model\Questions;
use App\Model\Testconfig;
use App\Model\Testquestions;
use App\Model\Testresults;
use App\Model\QuestionTranslations;
use App\Model\Usersession;
use Illuminate\Http\Request;
use App\Model\User;
use App\Model\Topicarea;
use App\Model\Category;
use App\Traits\FileOperation;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Image;
use DB;
use App\Mail\SendMailable;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use DateTime;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\UrlGenerator;
use Session;
//use Auth;

class UserController extends Controller
{
    use FileOperation;
    public function userLogin(Request $request){
        $studentId=$request->input('studentId');
        $password=sha1($request->input('password'));
        $temps = User::Where('StudentId',$studentId )->where('password', $password)->get();
        if(count($temps)>0){
            $user=$temps->first();
//            $user->photo=$this->getFileLink($user->photo, 'images/profile',1);
            $result =[
                'success' => true,
                'data' => $user
            ];
        }else{
            $result = [
                'success' => false,
                'message' => 'User ID or Password is wrong '
            ];
        }
        return response()->json($result);
    }
    public function userRegister(Request $request){

        $profile_image = $request->input('croppedImageSrc');
        $validator = Validator::make($request->all(), [
            'studentId' => 'string|unique:user',
            'email' => 'string|unique:user',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            if ($errors->has('studentId')) {
                $message = $errors->first('studentId');
                $result = [
                    'success' => false,
                    'message' => $message
                ];
                return response()->json($result);

            }
            if ($errors->has('email')) {
                $message = $errors->first('email');
                $result = [
                    'success' => false,
                    'message' => $message
                ];
                return response()->json($result);
            }
        }

        if(!empty($request->input('croppedImageSrc'))){
            $profile_image = $request->input('croppedImageSrc');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $photo = url('/').'/public/images/profile/avatar.png';
        }

        if($request->input('gender') == 'A') {
            $gender = 'Male';
        }
        else
            $gender = 'Female';
        if($request->input('married') == 'a'){
            $maritalStatus = 'Single';
        }
        else
            $maritalStatus = 'Married';

            $user = new User;
            $user->studentId = $request->input('studentId');
            $user->name = $request->input('first_name').' '.$request->input('last_name');
            $user->email = $request->input('email');
            $user->isAdmin = 0;
            $user->	resume_test = 0;
            $user->	time = new Datetime("now");
            $user->test = '';
            $user->photo = $photo;

            $user->gender = $gender;
            $user->nationality = $request->input('nationality');
            $user->dob = $request->input('dob');
            $user->age = $this->calculateAge($request->post('dob'));
            $user->maritalStatus = $maritalStatus;
            $user->password = sha1($request->input('password'));
            $user->confirmPassword = sha1($request->input('repeatPassword'));
            $user->passport = $request->input('passport_details');
            $user->emirates = $request->input('emirates_id_details');
            $user->language = '';
            $user->show_instruction = 0;
            $user->category = 1;


            if ($request->post('adminPassCode')) {

                $admin = User::Where('password',sha1($request->post('adminPassCode')) )->where('isAdmin', 1)->get();
                if (count($admin) >0) {
                    $result =[
                        'success' => false,
                        'message' => 'Incorrect admin credentials'
                    ];
                    return response()->json($result);
                } else {
                    $user->status = 1;
                }
            }

        if($user->save()){
            if ($user->status === 1) {

                $result = array(
                    'success' => true,
                    'data' => 'success...'
                );
            } else {

                $verification_code = $this->getToken(4);

                $message = "Belhash Driving Center code is " . $verification_code . ". Don't share this code with others";
                $data = array(
                    'logo' =>url('/').'/public/images/symbol.png',
                    'name' =>$user->name,
                    'message' => $message,
                );
                Mail::to($user->email)->send(new SendMailable($data));
                $result = array(
                    'success' => true,
                    'message' => 'Thank you, your registration is success. You will receive an activation email shortly.'
                );
            }
        }
        else {
            $result = array(
                'success' => false,
                'message' => 'Unable to create account, Please contact your Administrator',
            );
        }
        return response()->json($result);
    }
    private function getToken($length)
    {
        $token = "";
        $codeAlphabet = "0123456789";
        $max = strlen($codeAlphabet);
        for ($i = 0; $i < $length; $i++) {
            $token .= $codeAlphabet[random_int(0, $max - 1)];
        }
        return $token;
    }

    private function calculateAge($dob) {
        $dob = explode("-",$dob);
        $curMonth = date("m");
        $curDay = date("j");
        $curYear = date("Y");
        $age = $curYear - $dob[0];
        if($curMonth<$dob[1] || ($curMonth==$dob[1] && $curDay<$dob[2]))
            $age--;
        return $age;
    }

    public function adminLogin(Request $request){
        $input=$request->all();
        $email=$input['email'];
        $password=sha1($input['password']);
        $temps=User::where([['email','=',$email],['password','=',$password],['isAdmin','=','1']])->get();
        if($temps->count()>0){
            $user=$temps->first();
//            $user->photo=$this->getFileLink($user->photo, 'images/profile',1);
            $total_users = User::where('isAdmin', '!=', 1)->get();

            $result = [
                'success' => true,
                'data' => $user,
                'total_user_number' => count($total_users)
            ];
        }else{
            $result = [
                'success' => false,
                'message' => 'Incorrect Username / Password'
            ];
        }
        return $result;
    }
    public function adminGetUsersData(){
        $approvalUsers = User::where('isAdmin', '!=', 1)->get();
        $requestedUsers = User::where('status', '=', 0)->get();
        $questions = Questions::where('status', '=', 1)->get();
        $testResults = Testresults::get();
        if(!empty($approvalUsers) && !empty($questions) && !empty($requestedUsers) && !empty($testResults)){
            $result = [
                'success' => true,
                'usersNum' => count($approvalUsers),
                'requestedUsersNum' => count($requestedUsers),
                'questionsNum' => count($questions),
                'testResultsNum' => count($testResults),

            ];
        }
        else{
            $result = [
                'success' => false,
                'usersNum' => count($approvalUsers),
                'requestedUsersNum' => count($requestedUsers),
                'questionsNum' => count($questions),
                'testResultsNum' => count($testResults),

            ];
        }
        return $result;
    }

    public function adminGetUsers(){
        $UsersData = User::orderBy('id', 'DESC')->get();
        if(!empty($UsersData)){
            $result = [
                'success' => true,
                'usersData' => $UsersData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'usersNum' => $UsersData,
            ];
        }
        return $result;
    }

    public function adminGetCategory(){

        $CategoryData = Category::where('status', 1)->get();
        if(!empty($CategoryData)){
            $result = [
                'success' => true,
                'CategoryData' => $CategoryData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'CategoryData' => $CategoryData,
            ];
        }
        return $result;
    }

    public function adminGetLanguageData(){
        $languageData = Language::where('status', 1)->get();
        if(count($languageData)>0){
            $result = [
                'success' => true,
                'languageData' => $languageData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'languageData' => $languageData,
            ];
        }
        return $result;
    }




    public function adminCreateUser(Request $request){

        $isAdmin = $request->input('isAdmin');
        $studentId = $request->input('studentId');
        $password = $request->input('password');

            $validator = Validator::make($request->all(), [
                'studentId' => 'string|unique:user',
                'email' => 'string|unique:user',
            ]);
            if ($validator->fails()) {
                $errors = $validator->errors();
                if ($errors->has('studentId')) {
                    if($isAdmin ==0){$message = 'Student Id already exist in App';}
                    if($isAdmin ==1){$message = 'Admin Id already exist in App';}
                    if($isAdmin ==2){$message = 'Supervisor Id already exist in App';}
                    $result = [
                        'success' => false,
                        'message' => $message
                    ];
                    return response()->json($result);
                }
                if ($errors->has('email')) {
                    $message = $errors->first('email');
                    $result = [
                        'success' => false,
                        'message' => $message
                    ];
                    return response()->json($result);
                }
            }
            if($isAdmin == 1){
                $check = User::where('password', sha1($password))->get();
                if(count($check)>0){
                    $result = [
                        'success' => false,
                        'message' => 'Passcode already exists. Please, try a different passcode'
                    ];
                    return response()->json($result);
                }
            }

        if(!empty($request->input('croppedImageSrc'))){
            $profile_image = $request->input('croppedImageSrc');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $photo = url('/').'/public/images/profile/avatar.png';
        }

        if(!empty($request->input('dob'))){
            $dob = $request->input('dob');
            $age = $this->calculateAge($request->post('dob'));
        }
        else{
            $dob = '1900-01-01 ';
            $age = 0;
        }
        $user = new User;
        $user->studentId = $request->input('studentId');
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->isAdmin = $isAdmin;
        $user->	resume_test = 0;
        $user->	time = new Datetime("now");
        $user->test = '';
        $user->photo = $photo;
        $user->gender = $request->input('gender');
        $user->nationality = $request->input('nationality');
        $user->dob = $dob;
        $user->age = $age;
        $user->maritalStatus = $request->input('married');
        $user->password = sha1($request->input('password'));
        $user->confirmPassword = sha1($request->input('repeatPassword'));
        $user->passport = $request->input('passport_details');
        $user->emirates = $request->input('emirates_id_details');
        $user->language = '';
        $user->show_instruction = 0;
        $user->category = 1;
        $user->status = true;
        $user->save();
        if($user->save()){
            $result = [
                'success' => false,
                'message' => 'Created user successfully'
            ];
        }else{
            $result = [
                'success' => false,
                'message' => 'Unable to create account for this Student'
            ];
        }
        return response()->json($result);

    }

    public function adminViewUser($id){
        $userData = User::where('id', $id)->get();
        if(count($userData)){
            $result = [
                'success' => true,
                'userData' => $userData
            ];
        }
        else{
            $result = [
                'success' => false,
                'userData' => $userData
            ];
        }
        return response()->json($result);
    }

    public function adminChangeRole(Request $request){
        $userRole = $request->input('role');
        $id = $request->input('id');
        $userData = User::where('id', $id)->get();
        $userStatus = $userData[0]['status'];
        if($userStatus === 0){$Updated_userStatus = 1;}
        if($userStatus === 1){$Updated_userStatus = 0;}

        $update = User::where('id', $id)->update(['status' => $Updated_userStatus]);

        if($update){
            $result = [
                'success' => true,
                'id' => $id,
                'userRole' => $Updated_userStatus,
            ];
        }
        else{
            $result = [
                'success' => true,
                'id' => $id,
                'userRole' => $Updated_userStatus,
            ];
        }

        return response()->json($result);
    }

    public function adminEditUser(Request $request){
        $name = $request->input('name');
        $studentId = $request->input('studentId');
        $email = $request->input('email');
        $gender = $request->input('gender');

        $category = $request->input('category');
        $userType = $request->input('userType');
        $nationality = $request->input('nationality');
        $dob = $request->input('dob');
        $maritalStatus = $request->input('maritalStatus');
        $emirates_id_details = $request->input('emirates_id_details');
        $emirates_id_details = $request->input('emirates_id_details');
        $passport_details = $request->input('passport_details');

        if(!empty($request->input('croppedImageSrc'))){
            $profile_image = $request->input('croppedImageSrc');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $userData = User::where('studentId', $studentId)->get();
            $photo = $userData[0]['photo'];
        }

        $update = User::where('studentId', $studentId)->update([
            'name' => $name,
            'email' => $email,
            'gender' => $gender,
            'category' => $category,
            'photo' => $photo,
            'isAdmin' => $userType,
            'nationality' => $nationality,
            'dob' => $dob,
            'maritalStatus' => $maritalStatus,
            'emirates' => $emirates_id_details,
            'passport' => $passport_details,
        ]);
        if($update){
            $result = [
                'success' => true,
                'message' => 'Updated successfully',
            ];
        }
        else{
            $result = [
                'success' => false,
                'message' => 'Updated failed',
            ];
        }

        return response()->json($result);
    }

    public function adminGetCategories(){
        $CategoryData = Category::get();
        if(!empty($CategoryData)){
            $result = [
                'success' => true,
                'CategoryData' => $CategoryData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'CategoryData' => $CategoryData,
            ];
        }
        return $result;
    }

    public function adminChangeCategoryStatus(Request $request){

        $category_id = $request->input('category_id');
        $action = $request->input('action');
        $category_update = Category::where('id', $category_id)->update(['status'=>$action]);
        if($category_update){
            $result = [
                'success' => true,
                'category_id' => $category_id,
                'action' => $action,
            ];
        }
        else{
            $result = [
                'success' => false,
                'category_id' => $category_id,
                'action' => $action,
            ];
        }
        return $result;
    }

    public function adminGetCategoryData($category_id){

        $categoryData = Category::where('id', $category_id)->get();
        if(count($categoryData)>0){
            $result = [
                'success' => true,
                'categoryData' => $categoryData[0],
            ];
        }
        else{
            $result = [
                'success' => false,
                'categoryData' => $categoryData[0],
            ];
        }

        return $result;
    }
    
    public function adminEditCategory(Request $request){        
        $categoryId = $request->input('categoryId');
        $categoryName = $request->input('categoryName');

        $update = Category::where('id', $categoryId)->update(['name'=>$categoryName]);
        if($update){
            $result = [
                'success' => true,
                'categoryData' => $categoryId,
                'categoryName' => $categoryName,
                'message' => 'Updated successfully',
            ];
        }
        else{
            $result = [
                'success' => false,
                'categoryData' => $categoryId,
                'categoryName' => $categoryName,
                'message' => 'Updated is failed',
            ];
        }
        return $result;
    }

    public function adminCreateCategory(Request $request){
        $category = new Category();
        $category->name = $request->input('categoryName');
        $category->status = 1;
        if($category->save()){
            $result = [
                'success' => true,
                'categoryName' => $category->name,
                'message' => 'Created successfully',
            ];
        }
        else{
            $result = [
                'success' => false,
                'categoryName' => $category->name,
                'message' => 'Creating is failed',
            ];
        }
        return $result;
    }

    public function adminGetTopicArea(){

        $topicAreaData = Topicarea::where('status', 1)->get();
        $result = [];
        foreach ($topicAreaData as $row){
            $temp = $row;
            $questionData = Questions::where('status', 1)->where('topicArea',$row['id'] )->get();
            $temp['questionCount'] = count($questionData);
            $result[] = $temp;
        }
        rsort($result);
        if(count($result)>0){
            $result = [
                'success' => true,
                'topicAreaData' => $result,
            ];
        }
        else{
            $result = [
                'success' => false,
                'topicAreaData' => $result,
            ];
        }
        return $result;
    }

    public function adminGetTopicAreaData($topic_id){
        $topicAreaData = Topicarea::where('id', $topic_id)->get();
        if(count($topicAreaData)){
            $result = [
                'success' => true,
                'topicAreaData' => $topicAreaData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'topicAreaData' => $topicAreaData,
            ];
        }
        return $result;
    }

    public function adminEditTopicArea(Request $request){

        $topic_id = $request->input('topicId');
        $name = $request->input('name');
        $name_ar = $request->input('name_ar');if(empty($name_ar)){$name_ar = '';}
        $name_ta = $request->input('name_ta');if(empty($name_ta)){$name_ta = '';}
        $name_ur = $request->input('name_ur');if(empty($name_ur)){$name_ur = '';}
        $name_hi = $request->input('name_hi');if(empty($name_hi)){$name_hi = '';}
        $name_be = $request->input('name_be');if(empty($name_be)){$name_be = '';}
        $name_ma = $request->input('name_ma');if(empty($name_ma)){$name_ma = '';}
        $name_fa = $request->input('name_fa');if(empty($name_fa)){$name_fa = '';}
        $name_ch = $request->input('name_ch');if(empty($name_ch)){$name_ch = '';}
        $name_ru = $request->input('name_ru');if(empty($name_ru)){$name_ru = '';}
        $update = Topicarea::where('id', $topic_id)->update([
            'name' => $name,
            'name_ar' => $name_ar,
            'name_ta' => $name_ta,
            'name_ur' => $name_ur,
            'name_hi' => $name_hi,
            'name_be' => $name_be,
            'name_ma' => $name_ma,
            'name_fa' => $name_fa,
            'name_ch' => $name_ch,
            'name_ru' => $name_ru,
        ]);
        if($update){
            $result = [
                'success' => true,
                'updatedTopicAreaData' => $update,
                'message' => 'Topic Area details are saved.',
            ];
        }
        else{
            $result = [
                'success' => false,
                'updatedTopicAreaData' => $update,
                'message' => 'Topic Area name already exists.',
            ];
        }
        return $result;
    }

    public function adminCreateTopicArea(Request $request){
        $name = $request->input('name');

        $name_ar = $request->input('name_ar');if(empty($name_ar)){$name_ar = '';}
        $name_ta = $request->input('name_ta');if(empty($name_ta)){$name_ta = '';}
        $name_ur = $request->input('name_ur');if(empty($name_ur)){$name_ur = '';}
        $name_hi = $request->input('name_hi');if(empty($name_hi)){$name_hi = '';}
        $name_be = $request->input('name_be');if(empty($name_be)){$name_be = '';}
        $name_ma = $request->input('name_ma');if(empty($name_ma)){$name_ma = '';}
        $name_fa = $request->input('name_fa');if(empty($name_fa)){$name_fa = '';}
        $name_ch = $request->input('name_ch');if(empty($name_ch)){$name_ch = '';}
        $name_ru = $request->input('name_ru');if(empty($name_ru)){$name_ru = '';}
        $topicArea = new Topicarea;
        $topicArea->name = $name;
        $topicArea->name_ar = $name_ar;
        $topicArea->name_ta = $name_ta;
        $topicArea->name_ur = $name_ur;
        $topicArea->name_hi = $name_hi;
        $topicArea->name_be = $name_be;
        $topicArea->name_ma = $name_ma;
        $topicArea->name_fa = $name_fa;
        $topicArea->name_ch = $name_ch;
        $topicArea->name_ru = $name_ru;
        $topicArea->save();

        if($topicArea->save()){
            $result = [
                'success' => true,
                'message' => 'Topic Area details are saved.',
            ];
        }
        else{
            $result = [
                'success' => false,
                'message' => 'Topic Area details are failed.',
            ];
        }
        return $result;
    }

    public function adminDeleteTopicArea(Request $request){
        $topic_id = $request->input('topic_id');
        $update_topic = Topicarea::where('id',$topic_id)->update(['status' => 0]);
        $question = Questions::get();

        $result = [];
        foreach ($question as $k=> $row) {
            if($row['topicArea'] == $topic_id){
                Questions::where('id',$row['id'])->update(['status'=> 0]);
             }
        }
        if(!empty($update_topic)){
            $result = [
                'success' => true,
                'message' => $topic_id,
            ];
        }
        else{
            $result = [
                'success' => false,
                'message' => $topic_id,
            ];
        }
        return $result;
    }

    public function adminGetQuestionsCount(){

        $categories = Category::where('status', 1)->get();
        $count = array();
        foreach ($categories as $category) {

            $questions = Questions::where('category', $category['id'])->where('isRealtime', 1)->where('status', 1)->get();
            $realCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isSpecific', 1)->where('isPractise', 1)->where('status', 1)->get();
            $specificCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isCommon', 1)->where('isPractise', 1)->where('status', 1)->get();
            $commonCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isCommon', 1)->where('isRealtime', 1)->where('status', 1)->get();
            $realtimeCommonCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isSpecific', 1)->where('isRealtime', 1)->where('status', 1)->get();
            $realtimeSpecificCount = count($questions);

            array_push($count,  array('name'=>$category['name'], 'id' => $category['id'], 'realtime'=> $realCount, 'specificCount' => $specificCount, 'common'=>$commonCount, 'realtimeCommon'=>$realtimeCommonCount, 'realtimeSpecific'=>$realtimeSpecificCount));
        }
        if(count($count)){
            $result = [
                'success' => true,
                'data' => $count,
            ];
        }
        else{
            $result = [
                'success' => false,
                'data' => $count,
            ];
        }

        return $result;
    }

    public function adminGetQuestions(Request $request){

        $category_id = $request->input('category_id');
        $test_type = $request->input('test_type');

        if($test_type == 'realtime'){
            $questions= Questions::where('category', $category_id)->where('isSpecific', 1)->where('isRealtime', 1)->where('status', 1)->get();
        }
        else if($test_type == 'specific'){
            $questions= Questions::where('category', $category_id)->where('isSpecific', 1)->where('isPractise', 1)->where('status', 1)->get();
        }
        else{
            $questions= Questions::where('isCommon', 1)->where('status', 1)->get();
        }

        $response = [];
        foreach ($questions as $k => $question){
            $item = $question;
            $item['topicAreaName'] = Topicarea::where('id', $question['topicArea'])->first()->name;
            $item['categoryName'] = Category::where('id', $question['category'])->first()->name;
            $questionTranslation = $this->getQuestionStmt($question['id'], 'en-en');
            $temp = array_merge(json_decode(json_encode($item, true), true), json_decode(json_encode($questionTranslation, true), true));
            $response[] = $temp;
        }
        if(count($response)){
            $result_data= [
                'success' => true,
                'response' =>  $response,
            ];
        }
        else{
            $result_data= [
                'success' => false,
                'response' =>  $response,
            ];
        }
        return $result_data;
    }

    private function getQuestionStmt($questionId, $language) {

        $rows = QuestionTranslations::where('questionid',$questionId)->where('language', $language)->get();
        foreach ($rows as $row) {
            $result = $row;
            $result['translationId'] = $result['id'];
            unset($result['id']);
            if ($result['language'] === $language) {
                return $result;
            }
        }
        if(!is_null($rows) && isset($rows[0])){
            $result = $rows[0];
            $result['translationId'] = $result['id'];
            unset($result['id']);
            return $result;
        }else{
            return Array();
        }
    }

    public function adminLoadTestConfig(Request $request){

        $categoryId =$request->input('category_id');
        $testType =$request->input('test_type');

        $testConfigData = Testconfig::where('testcategory', $categoryId)->where('category', $testType)->get();
        if(count($testConfigData)>0){
            $result_data= [
                'success' => true,
                'testConfigData' =>  $testConfigData,
            ];
        }
        else{
            $result_data= [
                'success' => false,
                'testConfigData' =>  $testConfigData,
            ];
        }
        return $result_data;
    }

    public function adminEditTestConfig(Request $request){

        $no_spe_question = $request->input('no_spe_question');
        $no_com_question = $request->input('no_com_question');
        $no_spe_answer = $request->input('no_spe_answer');
        $no_com_answer = $request->input('no_com_answer');
        $duration = $request->input('duration');
        $testConfigDataId = $request->input('testConfigDataId');

        $update = Testconfig::where('id', $testConfigDataId)->update([
            'noofspecificquestion' => $no_spe_question,
            'noofcommonquestion' => $no_com_question,
            'noofreqspecificanswer' => $no_spe_answer,
            'noofreqcommonanswer' => $no_com_answer,
            'duration' => $duration,
        ]);

        if($update){
            $result= [
                'success' => true,
                'message' => 'Updated successfully'
            ];
        }
        else{
            $result= [
                'success' => false,
                'message' => 'Update is failed'
            ];
        }
        return $result;
    }

    public function adminGetQuestionData(Request $request){

        $response = [];
        $questionId = $request->input('questionId');
        $questionData = Questions::where('id', $questionId)->get();
        $item = $questionData[0];


        $topicArea = Questions::where('id',$questionId)->first()->topicArea;
        $topicAreaName = Topicarea::where('id', $topicArea)->first()->name;
        $item['topicAreaName'] = $topicAreaName;

        $categoryId = Questions::where('id',$questionId)->first()->category;
        $categoryName = Category::where('id', $categoryId)->first()->name;
        $item['categoryName'] = $categoryName;

        $questionTranslation = $this->getQuestionStmt_all($request->input('questionId'));
        $temp = array_merge(json_decode(json_encode($item, true), true), json_decode(json_encode($questionTranslation, true), true));
        $response[] = $temp;


        if(count($response)>0){
            $result= [
                'success' => true,
                'questionData' => $response
            ];
        }
        else{
            $result= [
                'success' => false,
                'questionData' => $response
            ];
        }
        return $result;
    }

    private function getQuestionStmt_all($questionId){
        $rows = QuestionTranslations::where('questionid',$questionId)->get();
        foreach ($rows as $row) {
            $result = $row;
            $result['translationId'] = $result['id'];
            unset($result['id']);

        }
        if(!is_null($rows) && isset($rows[0])){
            $result = $rows[0];
            $result['translationId'] = $result['id'];
            unset($result['id']);
            return $result;
        }else{
            return Array();
        }
    }

    public function adminGetQuestionTransData(Request $request){
        $questionId = $request->input('questionId');
        $translationData = QuestionTranslations::where('questionid', $questionId)->get();
        $temp = [];
        foreach ($translationData as $item){
            $questionData = Questions::where('id', $item['questionid'])->get();
            $item = array_merge(json_decode(json_encode($item, true), true), json_decode(json_encode($questionData[0], true), true));
            $temp[] = $item;
        }
        if(count($temp)>0){
            $result= [
                'success' => true,
                'transData' => $temp
            ];
        }
        else{
            $result= [
                'success' => false,
                'transData' => $temp
            ];
        }
        return $result;
    }

    public function adminGetLogs(){
        $logs = Usersession::orderBy('id', 'DESC')->get();
        $adminData = User::whereNotIn('isAdmin', [0])->orderBy('id', 'DESC')->get();
        $userData = User::where('isAdmin', 0)->orderBy('id', 'DESC')->get();

        if(count($logs)>0){
            $result= [
                'success' => true,
                'logs' => $logs,
                'student' => $userData,
                'admin' => $adminData,
            ];
        }
        else{
            $result= [
                'success' => false,
                'log' => $logs,
                'student' => $userData,
                'admin' => $adminData,
            ];
        }
        return $result;
    }

    public function adminGetResult(Request $request){

        $from = $request->input('from');
        $to = $request->input('to');
        $isAdmin = $request->input('isAdmin');

        $Result = Testresults::get();
        $resultCount = count($Result);
        $record = Testresults::whereBetween('testdate',[$from, $to])->get();

        $test_ids=$record->pluck('id')->toArray();

        $user_ids=$record->pluck('studentid')->toArray();
        $users=User::whereIn('id',$user_ids)->get();
        $user_maps=Array();
        foreach ($users as $user){
            $user_maps[strval($user->id)]=$user;
        }

        $categoryIds = $record->pluck('category')->toArray();
        $categoryNames = Category::whereIn('id', $categoryIds)->get();
        $categoryName_maps = Array();
        foreach ($categoryNames as $categoryName){
            $categoryName_maps[strval($categoryName->id)] = $categoryName->name;
        }

        $test_questions=Testquestions::whereIn('testid',$test_ids)->get();
        $question_ids=$test_questions->pluck('questionid')->toArray();
        $test_question_maps=[];
        foreach ($test_questions as $question){
            $key=strval($question['testid']);
            $test_question_maps[$key][]=$question;
        }

        $question_translations=QuestionTranslations::whereIn('questionid', $question_ids)->get();
        $question_translation_maps=[];
        foreach ($question_translations as $question){
            $key=strval($question['questionid']);
            $question_translation_maps[$key][]=$question;
        }

        foreach ($record as $row){

            $correctSpecificAnswers = 0;
            $correctCommonAnswers = 0;

            $response = $row;
            $user = isset($user_maps[strval($row->studentid)]) ? $user_maps[strval($row->studentid)] : Array();
            $response['student'] = $user;

            $categoryName = isset($categoryName_maps[strval($row->category)])? $categoryName_maps[strval($row->category)]:Array();
            $response['categoryName'] = $categoryName;


            $questions = isset($test_question_maps[strval($row->id)]) ? $test_question_maps[strval($row->id)] : Array();

            foreach ($questions as $qrow){
                if($qrow['status']){
                    $count = Questions::where('isRealtime', 1)->where('id', $qrow['questionid'])->get();
                    if($count[0]['isSpecific']){
                        $correctSpecificAnswers++;
                    }
                    elseif ($count[0]['isCommon']){
                        $correctCommonAnswers++;
                    }
                }
            }

            $reqQuestions = Testconfig::where('testcategory',$row['category'])->where('category','realtime')->get();
            if($correctSpecificAnswers >= $reqQuestions[0]['noofreqspecificanswer'] && $correctCommonAnswers >= $reqQuestions[0]['noofreqcommonanswer']){
                $response['result_status'] = 1;
            }
            else{
                $response['result_status'] = 0;
            }
            $result[] = $response;
        }
        if(count($result)){
            $resultData= [
                'success' => true,
                'testResult' => $result,
            ];
        } else{
            $resultData= [
                'success' => false,
                'testResult' => $result,
            ];
        }
        return $resultData;
    }

    public function getUserChoice($question, $choice) {
        switch ($choice) {
            case '1':
                return $question['choice1'];
                break;
            case '2':
                return $question['choice2'];
                break;
            case '3':
                return $question['choice3'];
                break;
            case '4':
                return $question['choice4'];
                break;

            default:
                # code...
                break;
        }
    }



    public function adminGetReport(Request $request){

        $from = $request->input('from');
        $to = $request->input('to');
        $isAdmin = $request->input('isAdmin');

        $Result = Testresults::get();
        $resultCount = count($Result);
        $record = Testresults::whereBetween('testdate',[$from, $to])->get();

        $test_ids=$record->pluck('id')->toArray();

        $user_ids=$record->pluck('studentid')->toArray();
        $users=User::whereIn('id',$user_ids)->get();
        $user_maps=Array();
        foreach ($users as $user){
            $user_maps[strval($user->id)]=$user;
        }

        $supervisor_ids=$record->pluck('adminid')->toArray();
        $supervisors=User::whereIn('id',$supervisor_ids)->get();
        $supervisor_maps=Array();
        foreach ($supervisors as $supervisor){
            $supervisor_maps[strval($supervisor->id)]=$supervisor;
        }

        $categoryIds = $record->pluck('category')->toArray();
        $categoryNames = Category::whereIn('id', $categoryIds)->get();
        $categoryName_maps = Array();
        foreach ($categoryNames as $categoryName){
            $categoryName_maps[strval($categoryName->id)] = $categoryName->name;
        }

        $test_questions=Testquestions::whereIn('testid',$test_ids)->get();
        $question_ids=$test_questions->pluck('questionid')->toArray();
        $test_question_maps=[];
        foreach ($test_questions as $question){
            $key=strval($question['testid']);
            $test_question_maps[$key][]=$question;
        }

        $question_translations=QuestionTranslations::whereIn('questionid', $question_ids)->get();
        $question_translation_maps=[];
        foreach ($question_translations as $question){
            $key=strval($question['questionid']);
            $question_translation_maps[$key][]=$question;
        }

//        $supervisor = User::where('isAdmin', 2)->get();


        $sresult = array();
        $report = [];
            foreach ($record as $row){

                $correctSpecificAnswers = 0;
                $correctCommonAnswers = 0;

                $response = $row;
                $user = isset($user_maps[strval($row->studentid)]) ? $user_maps[strval($row->studentid)] : Array();
                $response['student'] = $user;

                $supervisor = isset($supervisor_maps[strval($row->adminid)]) ? $supervisor_maps[strval($row->adminid)] : Array();
                $response['supervisor'] = $supervisor;

                $categoryName = isset($categoryName_maps[strval($row->category)])? $categoryName_maps[strval($row->category)]:Array();
                $response['categoryName'] = $categoryName;


                $questions = isset($test_question_maps[strval($row->id)]) ? $test_question_maps[strval($row->id)] : Array();

                foreach ($questions as $qrow){
                    if($qrow['status']){
                        $count = Questions::where('isRealtime', 1)->where('id', $qrow['questionid'])->get();
                        if($count[0]['isSpecific']){
                            $correctSpecificAnswers++;
                        }
                        elseif ($count[0]['isCommon']){
                            $correctCommonAnswers++;
                        }
                    }
                }

                $reqQuestions = Testconfig::where('testcategory',$row['category'])->where('category','realtime')->get();

                if($correctSpecificAnswers >= $reqQuestions[0]['noofreqspecificanswer'] && $correctCommonAnswers >= $reqQuestions[0]['noofreqcommonanswer']){
                    $response['result_status'] = 1;
                }
                else{
                    $response['result_status'] = 0;
                }
                $result[] = $response;
                sort($result);
            }

        foreach ($result as $value) {
            $count = 0;
            $pass = 0;
            $count++;
            if($value['result_status'] == 1){
                $pass++;
            }
            array_push($report, array('id' => $value['adminid'],'data' => $value, 'total' => $count,'passed' => $pass, 'percent' => round(($pass/$count) * 100 )));
        }

        if(count($report)){
            $resultData= [
                'success' => true,
                'reportResult' => $report,
            ];
        } else{
            $resultData= [
                'success' => false,
                'reportResult' => $report,
            ];
        }
        return $resultData;

    }

}
