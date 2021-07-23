import React from 'react'

function Trendingpack(props) {
    return (
        <section id="trending-pack">
            <div className="album-heading d-flex">
                <h2 className="heading-text">Trending Packs</h2>
                <div className="view-all ml-auto">
                    <button className="btn text-light">View All</button>
                    <button className="btn btn-dark">&lt;</button>
                    <span>1</span>
                    <button className="btn btn-dark">&gt;</button>
                </div>
            </div>
            <div className="slide-items">
               
               { props.trendingPack.map ( trendpacks =>

               <div className="album-item">
                    <img src={require(`../images/trendingpacks/${trendpacks.img}`).default} alt="hhh" />
                    <div className="current-song">
                    <i class="fa fa-play "></i><p> cocktail house 9</p>
                    </div>
                </div>
            )}
                
            </div>
        </section>
    )
}

export default Trendingpack
