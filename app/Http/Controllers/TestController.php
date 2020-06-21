<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Model\Category;
use App\Model\Questions;
use App\Model\Testconfig;
use App\Model\Questionstate;
use App\Model\QuestionTranslations;

use App\Traits\FileOperation;

class TestController extends Controller
{
    use FileOperation;
    public function getQuestionStmt($questionId, $language) {
        $rows = QuestionTranslations::where('questionid',$questionId)->get()->toArray();
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

    public function getQuestionStmtAudio($response, $audiolang){
        foreach ($response as $key => $row) {
            $rows = QuestionTranslations::where('questionid=',$row['questionid'])->all();
            $status = false;
            $audio = [];
            foreach ($rows as $qkey => $qrow) {
                $result = $qrow;
                if ($result['language'] === $audiolang) {
                    $status = true;
                    $audio = $qrow;
                }
            }
            if($status){
                $response[$key]['audio'] = $audio['audio'];
                $response[$key]['option1audio'] = $audio['option1audio'];
                $response[$key]['option2audio'] = $audio['option2audio'];
                $response[$key]['option3audio'] = $audio['option3audio'];
            }else{
                $response[$key]['audio'] = "";
                $response[$key]['option1audio'] = "";
                $response[$key]['option2audio'] = "";
                $response[$key]['option3audio'] = "";
            }
        }
        return $response;
    }

    public function getTestConfig(Request $request){
        $input=$request->all();
        $category=$input['category'];
        if(!is_null($category) && $category!="")
            $result=Testconfig::where('testcategory',$category)->get()->toArray();
        else
            $result=Testconfig::all();
        return response()->json([
            'status'=>'success',
            'data'=>$result
        ]);
    }

    public function loadTest(Request $request){
        $input=$request->all();
        $response = array();

        if ($input['testType'] == 'realtime') {
            if($input['common'] > 0) {
                $rows=Questions::where([['isCommon','=',1],['status','=',1]])->orderByRaw("RAND()")
                                ->limit($input['common'])->get()->toArray();
                foreach ($rows as $row){
                    $result = array_merge($row, $this->getQuestionStmt($row['id'], $input['language']));
                    $response[]=$result;
                }
            }
            if($input['specific'] > 0) {
                $rows = Questions::where([['category','=',$input['testCategory']],['isSpecific','=',1],['status','=',1]])->orderByRaw("RAND()")
                        ->limit($input['specific'])->get()->toArray();

                foreach ($rows as $row) {
                    $result = array_merge($row, $this->getQuestionStmt($row['id'], $input['language']));
                    $response[]=$result;
                }
            }
        }
        elseif($input['type'] == 'practise') {
            $model = Questionstate::where('user_id',$input['user_id'])->get()->toArray();
            foreach ($model as $value) {
                $rows =Questions::where('id = '.$value->question_id)->get()->toArray();
                foreach ($rows as $kvalue) {
                    $result =  $kvalue;
                    $result = array_merge($result, $this->getQuestionStmt($result['id'], $input['language']));
                    $response[]=$result;
                }
            }
        }
        else {
            switch ($input['type']) {
                case 'common':
                    $query1=['isCommon','=',1];
                    break;
                case 'specific':
                    $query1=['isSpecific','=',1];
                    break;
            }
            $response = array();
            $rows = Questions::where([['category','=',$input['testCategory']],['isPractise','=',1],['status','=',1],$query1,])
                                ->limit($input['limit'])->get()->toArray();

            foreach ($rows as $row) {
                $result =  $row;
                $result = array_merge($result, $this->getQuestionStmt($result['id'], $input['language']));
                array_push($response, $result);
            }

        }
        $audiolang = isset($input['audiolang']) ? $input['audiolang'] : null;
        if($audiolang != null){
            $response = $this->getQuestionStmtAudio($response, $audiolang);
        }

        foreach ($response as $item){
            $item['photo']=$this->getFileLink($item['photo'],"images/question_photos");
        }

        return response()->json([
            'status' => 'success',
            'data' => $response
        ]);
        return $request->all();


    }
}
