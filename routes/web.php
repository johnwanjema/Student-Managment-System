<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');


// Route::get('/admin/{path}', 'HomeController@index')->where(['path' => '.*']);

Route::get(
    '/admin/{any?}',
    function () {
        // return Auth::user()->email;
        if (Auth::user() == null) {
            return redirect()->route('login');
        } else {
            return view('home');
        }
    }
)->name('home');

Route::get('logout', [
    'as' => 'logout',
    function () {
        Auth::logout();
        return redirect()->route('login');
    }
]);

