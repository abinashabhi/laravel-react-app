<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\musicDataController;

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
Route::get('data',[musicDataController::class,'getData']);
Route::get('genresimgs',[musicDataController::class,'genresImg']);
Route::get('newsimgdb',[musicDataController::class,'newsimgDb']);
Route::get('newrelease',[musicDataController::class,'newRelease']);
Route::get('topdownload',[musicDataController::class,'topDownloads']);
Route::get('zipdjpack',[musicDataController::class,'zipdjpackdb']);
Route::get('radar',[musicDataController::class,'ourradarimgdb']);
Route::get('topchartsleft',[musicDataController::class,'topChartsleft']);
Route::get('toprightcharts',[musicDataController::class,'topchartsright']);
Route::get('topdownloadright',[musicDataController::class,'topdownloadRight']);
Route::get('trending',[musicDataController::class,'trendingpackimgdb']);
Route::get('trendingcharts',[musicDataController::class,'trendingchartsimgdb']);

