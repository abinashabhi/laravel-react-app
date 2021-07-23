import React from 'react'

function Genres(props) {
    return (
        <div className="genre-content container-fluid ">
             <div className="genres-heading d-flex">
                
                <h2 className="heading-text">Genres</h2>
                <div className="genre-all ml-auto">
                    <button className="btn text-light">View All</button>
                    <button className="btn btn-dark">&lt;</button>
                    <span>1</span>
                    <button className="btn btn-dark">&gt;</button>
                </div>
            </div>
            <div className="genre-container">
                {props.genresImgs.map( genresData =>
                <div className="genres-box">
                   <img src={require(`../images/genre/${genresData.img}`).default} alt="hhh" />   
                </div>
                )}

               
            </div>
        </div>
    )
}

export default Genres
