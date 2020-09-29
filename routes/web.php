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
    return view('index');
});
// Route::get('/', 'DashboardController@dashboardAnalytics');
Auth::routes(['verify' => true]);
// Route Dashboards
Route::get('/dashboard-analytics', 'DashboardController@dashboardAnalytics');
Route::get('/profile', 'ProfileController@index');
Route::get('/edit_profile', 'ProfileController@edit_page');
Route::post('/edit_profile', 'ProfileController@edit')->name('edit_profile');

Route::post('/login/validate', 'Auth\LoginController@validate_api');
