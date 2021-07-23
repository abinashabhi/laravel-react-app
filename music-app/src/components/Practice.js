import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import {AiOutlineLeft} from "react-icons/ai";
// import {AiOutlineRight} from "react-icons/ai";
import axios from "axios"
// import img1 from "../images/genre/"

const Practice = (props) => {
  // let image = require('../images/genre/')
  const [data, setData] = useState([]) 
   
  
  useEffect(() => {
    axios.get("https://api.npoint.io/b22496cbc582fd3c56c1")
    .then(res => {
      const item = res.data
      console.log(item.length)
      console.log(item[10].genresImg)
      setData(item[10].genresImg)
      

    })
    .catch(err => {
      console.log(err)
    })

  }, [])

  return (
    <div style={{ margin: " 30px", padding: "0 2%" }} >
      {/* <div className="album-heading d-flex">
            <h2 style={{fontSize:"1rem"}} className="ml-3">Swipe To Slide</h2>
            <button className="btn m-auto " >View All</button>
            
            </div>
            <Slider {...settings}>

                {props.practiceItems ? props.practiceItems.map(item =>

                    <div style={{paddingLeft:"50px",top:"50px"}} className="container-fluid"> 
                        <img src={item.img} alt={item.description} style={{width:"100%"}}/>
                        <div className="current-song d-flex bg-dark" >
                            <i className="fa fa-play mt-2 ml-2"></i> <p className=" ml-2 mt-1" > cocktail house9</p>
                        </div>
                        
                    </div>

                ) : null}

            </Slider> */}

      {
        data ? data.map(items =>
          <div>
            <img src={require(`../images/genre/${items.img}`).default} alt="hhh" />
            <p>{items.title}</p>
          </div>
        ) : null
      }
      
    </div>
  )
}

export default Practice
