import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Album(props) {
    let zipdj = props.zipDjitems

    return (

        <section id="trending-pack">
            <div className="row">
                <div className="col-md-12">
                    <div className="album-heading d-flex">
                        <h2 className="heading-text">zipDJ Pack</h2>
                        <div className="view-all ml-auto">
                            <button className="btn text-light">View All</button>
                            <button className="btn btn-dark">&lt;</button>
                            <span>1</span>
                            <button className="btn btn-dark">&gt;</button>
                        </div>
                    </div>

                    <div className="slide-items" >


                        {zipdj ? zipdj.map(zipdjItems =>
                            <div className="album-item"  >
                                <img src={require(`../images/zipdjpacks/${zipdjItems.img}`).default} alt="hhh" />
                                <div className="current-song">
                                    <i className="fa fa-play "></i> <p className=" "> cocktail house9</p>
                                </div>


                            </div>

                        ) : null}

                    </div>
                </div>
            </div>
        </section>



    )

}
export default Album