import React from 'react'
import "../scss/style.scss";



function Slider() {
    return (
        <section id="main" className="container-fluid">
            <div className="row">
                <div className="col-md-12">
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src="https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwbGF5ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src="https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBwbGF5ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    &lt;
                            </button>
                <button className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                &gt;
                </button>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Slider
