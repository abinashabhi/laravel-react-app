import React from 'react'


function Ourradar(props) {
    const zipdj = props.radar
    return (
        <div>
            <section id="trending-pack">
                <div className="album-heading d-flex">
                    <h2 className="heading-text">On Our Radar</h2>
                    <div className="view-all ml-auto">
                        <button className="btn text-light">View All</button>
                        <button className="btn btn-dark">&lt;</button>
                        <span>1</span>
                        <button className="btn btn-dark">&gt;</button>
                    </div>
                </div>
                <div className="slide-items">
                    {zipdj ? zipdj.map(zipdjItems =>
                        <div className="album-item">
                            <img src={require(`../images/on-our-radar/${zipdjItems.img}`).default} alt="hhh" />
                            <div className="current-song">
                            <i className="fa fa-play "></i>  <p className=" ">  cocktail house9</p>
                            </div>


                        </div>
                    ) : null}
                </div>

            </section>
        </div>
    )
}

export default Ourradar
