<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\musicDataController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
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
