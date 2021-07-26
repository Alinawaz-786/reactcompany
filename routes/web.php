<?php

use Illuminate\Support\Facades\Route;

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

Route::any('/', function () {
    return view('welcome');
});
// Route::view('/{any}', 'welcome')->where('any', '.*');

Route::get('employee/list', 'EmployeeController@index')->name('employee.list');
Route::post('employee/store', 'EmployeeController@store')->name('employee.store');
Route::post('employee/update', 'EmployeeController@update')->name('employee.update');
Route::delete('employee/destroy/{id}', 'EmployeeController@destroy')->name('employee.destroy');
