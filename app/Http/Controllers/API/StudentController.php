<?php

namespace App\Http\Controllers\API;

use App\student;
use Carbon\Carbon;
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
        $student = student::find($id);

        if (is_null($student)) {
            return api_response(false, null, 0, 'false','Student with that id does not exist', null);
        }

        $student->update($request->all());

        return api_response(true, null, 0, 'success','successfully updated student', $student);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = student::find($id);
        if (is_null($student)) {
            return api_response(false, null, 0, 'false','Student with that id does not exist', null);
        }

        $student->delete();

        return api_response(true, null, 0, 'success','successfully deleted student', null);
    }


    public function studentsPerMonth()
    {
        $months_array = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        $totals = array();
        foreach ($months_array as $month) {
            $total = 0;
            $item = array();
            // get payments in a month
            $students = student::whereYear('created_at', Carbon::now()->format('Y'))->whereMonth('created_at', $month)->get()->count();

            $item['month'] = date("F", mktime(0, 0, 0, $month, 1));
            $item['total'] = $students;
            array_push($totals, $item);
        }

        return api_response(true,null, 200, 'error','successfully fetched students count', $totals);

    }
}
