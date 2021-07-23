import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import {ImArrowDown} from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai"

function Download(props) {
    return (
        <div className="downloads">
            <h2>Top Downloads</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="options-button d-flex">
                        <button className="btn btn-dark">Dance</button>
                        <button className="btn btn-dark">House</button>

                        <div className="view-all ml-auto">
                            <button className="btn text-light">View All</button>
                            <button className="btn btn-dark">&lt;</button>
                            <span>1</span>
                            <button className="btn btn-dark">&gt;</button>
                        </div>
                    </div>
                    <table class="table table-dark ">
                        {props.left ? props.left.map(downloadleft =>
                            <tr>
                                <td><p>{downloadleft.slno}</p></td>
                                <td><img src={require(`../images/top-download-left/${downloadleft.img}`).default} alt="hhh" /></td>
                                <td><i className="fa fa-play"></i></td>
                                <td><AiOutlineHeart size={20} style={{ marginTop: "12px" }}/></td>
                                <td><p>Miss independent</p><p>Rykon Kapla Y Micky</p></td>
                                <td><p className="center">Techno.melodic</p></td>
                                <td><FaCloudDownloadAlt size={20} style={{ marginTop: "10px" }}/></td>
                                <td><ImArrowDown size={15} style={{ marginTop: "12px" }}/></td>
                            </tr>
                            ):null}
                    </table>
                </div>

                <div className="col-md-6 ">
                    <div className="options-button d-flex">
                        <button className="btn btn-dark">Urban</button>
                        <button className="btn btn-dark">Latin</button>

                        <div className="view-all ml-auto">
                            <button className="btn text-light">View All</button>
                            <button className="btn btn-dark">&lt;</button>
                            <span>1</span>
                            <button className="btn btn-dark">&gt;</button>
                        </div>
                    </div>
                    <table class="table table-dark">
                        {props.right ? props.right.map(downloadRight => 
                            <tr>
                                  <td><p>{downloadRight.slno}</p></td>
                                  <td><img src={require(`../images/top-download-right/${downloadRight.img}`).default} alt="hhh" /></td>
                                <td><i className="fa fa-play"></i></td>
                                <td><AiOutlineHeart size={20} style={{ marginTop: "12px" }}/></td>
                                <td><p>Miss independent</p><p>Rykon Kapla Y Micky</p></td>
                                <td><p className="center">Techno.melodic</p></td>
                                <td><FaCloudDownloadAlt size={20} style={{ marginTop: "10px" }}/></td>
                                <td><ImArrowDown size={15} style={{ marginTop: "12px" }}/></td>
                            </tr>
                          ):null}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Download
