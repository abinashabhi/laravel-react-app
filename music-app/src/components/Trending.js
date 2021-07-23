import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im"
import { AiOutlineHeart } from "react-icons/ai"
import Button from './Button';
function Trending(props) {
    return (
        <section id="trending-charts">
            <div className="row">
                <div className="col-md-12">
                    <h2>Trending Charts</h2>
                    <div className="options-button d-flex">
                        <Button
                            options={props.trendingData}
                        />
                        <div className="view-all ml-auto">
                            <button className="btn text-light">View All</button>
                            <button className="btn btn-dark">&lt;</button>
                            <span>1</span>
                            <button className="btn btn-dark">&gt;</button>
                        </div>
                    </div>

                    <table className="table table-dark">
                        <tbody>
                            {props.trendingImgs ? props.trendingImgs.map(trendcharts =>
                                <tr>
                                    <td><img src={require(`../images/trendingchart/${trendcharts.img}`).default} alt="hhh" /></td>
                                    <td><i className="fa fa-play"></i></td>
                                    <td><AiOutlineHeart size={20} style={{ marginTop: "10px" }} /></td>
                                    <td><p>Miss independent</p></td>
                                    <td><p>Justin Credbile VIP Edits</p></td>
                                    <td><p>Reykon, Kapla Y Miky,Royo</p></td>
                                    <td><p>Select Entertain</p></td>
                                    <td><p>Techno<span>.</span> Melodic</p></td>
                                    <td><p>99.99</p></td>
                                    <td><p>250</p></td>
                                    <td><p>12A</p></td>
                                    <td><FaCloudDownloadAlt size={20} style={{ marginTop: "9px" }} /></td>
                                    <td><ImArrowDown size={15} style={{ marginTop: "12px" }} /></td>
                                </tr>

                            ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Trending
