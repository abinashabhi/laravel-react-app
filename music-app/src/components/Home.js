import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Tables from './Tables'
import Album from './Album'
import Download from './Download'
import Genres from './Genres'
import Trending from './Trending'
import Trendingpack from './Trendingpack'
import Topcharts from './Topcharts'
import Ourradar from './Ourradar'
import News from './News'
import Footer from './Footer'
// import Data from "./dbs/newsimgdb"
// import genres from './dbs/genresImg'
// import zipdjpackData from './dbs/zipdjpackdb'
// import trendingPackImgs from './dbs/trendingpackimgdb'
// import onourradarImgs from './dbs/ourradarimgdb'
// import trendingCharts from './dbs/trendingchartsimgdb'
// import topchartLeft from './dbs/topchartsleft'
// import topchartsRight from "./dbs/topchartsright"
// import topDownloadLeft from './dbs/topdownload'
// import topDownloadRight from "./dbs/topdownloadRight"
// import newRelease from './dbs/newRelease'
import section from './dbs/newRealseButton'
import trendBtnSection from "./dbs/trendingButtions"
// import Practice from './Practice'
// import Practice from './Practice'

import axios from 'axios'

function Home() {
    const [data, setData] = useState([])
    const [albumData, setAlbumData] = useState([])
    const [downloadData, setDownloadData] = useState([])
    const [rightDownloadData, setRightDownloadData] = useState([])

    const [genersData, setGenresData] = useState([])
    const [trendingData, setTrendingData] = useState([])
    const [trendingPackdata, setTrendingPackData] = useState([])
    const [topChartData, setTopChartData] = useState([])
    const [topChartRightData, setTopChartRightData] = useState([])

    const [ourRadarData, setOurRadarData] = useState([])
    const [newsData, setNewsData] = useState([])



    // useEffect(() => {
    //     axios.get("https://api.npoint.io/b22496cbc582fd3c56c1")
    //         .then(res => {
    //             const item = res.data
    //             setData(item[0].newRelease)
    //             setAlbumData(item[0].zipdjpackdb)
    //             setDownloadData(item[0].topdownload)
    //             setRightDownloadData(item[0].topdownloadRight)
    //             setGenresData(item[0].genresImg)
    //             setTrendingData(item[0].trendingchartsimgdb)
    //             setTrendingPackData(item[0].trendingpackimgdb)
    //             setTopChartData(item[0].topchartsleft)
    //             setTopChartRightData(item[0].topchartsright)
    //             setOurRadarData(item[0].ourradarimgdb)
    //             setNewsData(item[0].newsimgdb)
    //         }).catch(err => console.log(err))
    // }, [])


    useEffect(() => {
        getData();
        getAlbumData();
        getDownloadData();
        getRightDownloadData();
        getGenresData();
        getTrendingData();
        getTrendingPackData();
        getTopChartData();
        getTopChartRightData();
        getOurRadarData();
        getNewsData();

    }, []);
    console.log(process.env.REACT_APP_PORT)
    const getData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/newrelease`)
            .then(res => {
                const item = res.data
                setData(item)
            })
            .catch(err => console.log(err))
    }
    const getAlbumData = () =>{
        axios.get(`${process.env.REACT_APP_PORT}/zipdjpack`)
            .then(res => {
                const item = res.data
                setAlbumData(item)
            })
            .catch(err => console.log(err))
    }
    const getDownloadData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/topdownload`)
            .then(res => {
                const item = res.data
                setDownloadData(item)
            })
            .catch(err => console.log(err))
    }
    const getRightDownloadData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/topdownloadright`)
            .then(res => {
                const item = res.data
                setRightDownloadData(item)
            })
            .catch(err => console.log(err))
    }
    const getGenresData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/genresimgs`)
            .then(res => {
                const item = res.data
                setGenresData(item)
            })
            .catch(err => console.log(err))
    }
    const getTrendingData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/trendingcharts`)
            .then(res => {
                const item = res.data
                setTrendingData(item)
            })
            .catch(err => console.log(err))
    }
    const getTrendingPackData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/trending`)
            .then(res => {
                const item = res.data
                setTrendingPackData(item)
            })
            .catch(err => console.log(err))
    }
    const getTopChartData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/topchartsleft`)
            .then(res => {
                const item = res.data
                setTopChartData(item)
            })
            .catch(err => console.log(err))
    }
    const getTopChartRightData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/toprightcharts`)
            .then(res => {
                const item = res.data
                setTopChartRightData(item)
            })
            .catch(err => console.log(err))
    }
    const getOurRadarData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/radar`)
            .then(res => {
                const item = res.data
                setOurRadarData(item)
            })
            .catch(err => console.log(err))
    }
    const getNewsData = () => {
        axios.get(`${process.env.REACT_APP_PORT}/newsimgdb`)
            .then(res => {
                const item = res.data
                setNewsData(item)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Slider />
            <Tables
                tableSection={section}
                data={data} />


            <Album
                zipDjitems={albumData}
            />
            <Download
                left={downloadData}
                right={rightDownloadData}
            />
            <Genres
                genresImgs={genersData}
            />
            <Trending
                trendingData={trendBtnSection}
                trendingImgs={trendingData}
            />
            <Trendingpack
                trendingPack={trendingPackdata}
            />
            <Topcharts

                tableSection={section}

                left={topChartData}
                right={topChartRightData}
            />
            <Ourradar
                radar={ourRadarData}
            />
            <News
                newsImgs={newsData}
            />
            <Footer />

            {/* <Practice 
    //  practiceItems = {zipdjpackData}
    // />   */}


        </div>
    )
}

export default Home
