<?php

namespace App\Http\Controllers\API;

use App\student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Student::with('darasa')->get();
        return api_response(true,null, 200, 'success','successfully fetched all students', $students);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'firstName' => 'required|string|max:191',
            'lastName' => 'required|string|max:191',
            'classId' => 'required|integer ',
            'email' => 'required|string|email|max:191|unique:students',
        ]);


        $student = new student();
        $student->firstName = $request['firstName'];
        $student->lastName = $request['lastName'];
        $student->email = $request['email'];
        $student->classId = $request['classId'];
        
        if($student->save()){
            return api_response(true, null, 200, 'success','successfully added the Class',$student);
        }else{
            return api_response(false, null, 500, 'failed','error adding Class',$request->all());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
