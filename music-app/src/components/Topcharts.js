import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import {ImArrowDown} from "react-icons/im"
import {AiOutlineHeart} from "react-icons/ai"
import Button from './Button';

 function Topcharts(props) {
    return (
        <section id="top-charts">
            <h2>Top Charts</h2>
            <div className="options-button d-flex">
            <Button 
                options={props.tableSection}
                />

                <div className="view-all ml-auto">
                    <button className="btn text-light">View All</button>
                    <button className="btn btn-dark">&lt;</button>
                    <span>1</span>
                    <button className="btn btn-dark">&gt;</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <table class="table table-dark ">
                        {props.left?props.left.map(leftChart =>
                            <tr>
                                <td><p className="center">{leftChart.slno}</p></td>
                                <td><img src={require(`../images/top-chart-left/${leftChart.img}`).default} alt="hhh" /></td>
                                <td><i className="fa fa-play"></i></td>
                                <td><AiOutlineHeart size={20} style={{ marginTop: "12px" }}/></td>
                                <td><p>Miss independent</p><p>Rykon Kapla Y Micky</p></td>
                                <td><p className="center">Techno.melodic</p></td>
                                <td><FaCloudDownloadAlt size={20} style={{ marginTop: "13px" }}/></td>
                                <td> <ImArrowDown size={15} style={{ marginTop: "15px" }}/></td>
                            </tr>
                        ):null}
                    </table>
                </div>
                <div className="col-md-6">
                    <table class="table table-dark ">

                    {props.right ? props.right.map(rightChart =>
                            <tr>
                                <td><p className="center">{rightChart.slno}</p></td>
                                <td><img src={require(`../images/top-chart-right/${rightChart.img}`).default} alt='' /></td>
                                <td><i className="fa fa-play"></i></td>
                                <td><AiOutlineHeart size={20} style={{ marginTop: "12px" }}/></td>
                                <td><p>Miss independent</p><p>Rykon Kapla Y Micky</p></td>
                                <td><p className="center">Techno.melodic</p></td>
                                <td><FaCloudDownloadAlt size={20} style={{ marginTop: "15px" }}/></td>
                                <td><ImArrowDown size={15} style={{ marginTop: "15px" }}/></td>
                            </tr>
                        ):null}

                    </table>
                </div>
            </div>

        </section>
    )
}

export default Topcharts
