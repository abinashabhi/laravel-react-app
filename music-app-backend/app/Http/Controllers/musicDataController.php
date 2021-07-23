<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genresimg;
use App\Models\Newsimgdb;
use App\Models\Newrelease;
use App\Models\Topdownload;
use App\Models\Zipdjpack;
use App\Models\Ourradar;
use App\Models\Topleftchat;
use App\Models\Toprightchart;
use App\Models\Toprightdownload;
use App\Models\Trending;
use App\Models\Trendingchart;

use Illuminate\Support\Facades\Http;

class musicDataController extends Controller
{  
    

    function getData(){
         $data = Http::get('https://api.npoint.io/b22496cbc582fd3c56c1/');
         return $data[0];
    }
    function genresImg(){
      $genresImg = Genresimg::all();
      return $genresImg;
    
    }
    function newsimgDb(){
        $news = Newsimgdb::all();        
        return $news;
    }
    function newRelease(){
        $release = Newrelease::all();       
        return $release;

    }
    function topDownloads(){
        $topdownloads = Topdownload::all();
        return $topdownloads;
    }
    function zipdjpackdb(){
        $zipdjpackData = Zipdjpack::all();       
        return $zipdjpackData;

    }
    function ourradarimgdb(){
        $radar = Ourradar::all();       
        return $radar;
    }
    function topchartsleft(){
        $topChartsleft = Topleftchat::all();       
        return $topChartsleft;
    
    }
    function topchartsright(){
        $topChartsright = Toprightchart::all();    
        return $topChartsright;
    }
    function topdownloadRight(){
        $topdownloadright = Toprightdownload::all();       
        return $topdownloadright;

    }
    function trendingpackimgdb(){
        $trendingData = Trending::all();       
        return $trendingData;

    }
    function trendingchartsimgdb(){
        $trendingCharts = Trendingchart::all();       
        return $trendingCharts;
    
    }
    
}
