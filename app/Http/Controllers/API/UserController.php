<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

use App\User;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::latest()->paginate(10);
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
            'name' => ['required', 'min:3'],
            'email' => ['required', 'min:3', 'unique:users'],
            'password' => ['required', 'min:6',],
            'name' => ['required', 'min:3'],
        ]);
        User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => Hash::make(request('password')),
            'type' => request('type'),
            'bio' => request('bio'),
        ]);
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
        $user  =  User::findorFail($id);
        //validate input
        $this->validate($request, [
            'name' => ['required', 'min:3'],
            'email' => 'required|email|min:3|unique:users,email,'.$user->id,
            'password' => ['sometimes', 'min:6',],
            'name' => ['required', 'min:3'],
        ]);

        $user->update($request->all());
        return ["message" => "User update"];;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //find user
        $user  =  User::findorFail($id);
        //delete user
        $user->delete();
        return ["message" => "User deleted"];
    }
}
