<?php

namespace App\Http\Controllers\API;

use App\darasa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;


class DarasaContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $classes = darasa::orderBY('created_at','DESC')->with('user')->get();
        return api_response(true,null, 200, 'success','successfully fetched all classes', $classes);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
       
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
            'className' => 'required',
            'classType' => 'required',
        ]);

        $darasa = new darasa();
        $darasa->className = $request['className'];
        $darasa->classType = $request['classType'];
        $darasa->addedBy = Auth::id();
        
        if($darasa->save()){
            return api_response(true, null, 200, 'success','successfully added the Class',$darasa);
        }else{
            return api_response(false, null, 500, 'failed','error adding Class',$request->all());
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Darasa  $darasa
     * @return \Illuminate\Http\Response
     */
    public function show(Darasa $darasa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Darasa  $darasa
     * @return \Illuminate\Http\Response
     */
    public function edit(Darasa $darasa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Darasa  $darasa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Darasa $darasa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Darasa  $darasa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Darasa $darasa)
    {
        //
    }
}
