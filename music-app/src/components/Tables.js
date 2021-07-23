import React, { useState } from 'react'
import Button from './Button';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im"
import { BsChevronDown } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import {BsChevronCompactUp} from 'react-icons/bs' 


function Tables(props) {
    const [newColor, setNewColor] = useState(0);
    const [drop, setDrop] = useState(0);

    const handleClick = (id) => {
        if (newColor !== id) {
            setNewColor(id)
        } else {
            setNewColor(0)
        }
    }
 
    const dropdown = (id) => {
        if (drop !== id) {
            setDrop(id)
        }
        else{
            setDrop(0)
        }
    }
   
    return (
        <section id="table">
            <div className="row">
                <div className="col-md-12">
                    <h2>New Releases</h2>
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

                    <table className="table table-dark">
                        {props.data ? props.data.map(songs =>
                            <>
                                <tr>
                                    <td><img src={require(`../images/new-release-cover/${songs.img}`).default} alt="hhh" /></td>
                                    <td><i className="fa fa-play"></i></td>
                                    <td><AiOutlineHeart color={newColor === songs.id ? "pink" : ""}  onClick={() => handleClick(songs.id)} size={20} style={{ marginTop: "10px" }} /></td>
                                    <td><p>Miss independent</p></td>
                                    <td onClick={() => dropdown(songs.id)}><p>{drop === songs.id ? <BsChevronCompactUp color="#EEEEEE" /> :<BsChevronDown color="#EEEEEE" />}   Reykon, Kapla Y Miky,Royo</p></td>
                                    <td><p>Select Entertain</p></td>
                                    <td><p>Techno<span>.</span> Melodic</p></td>
                                    <td><p>99.99</p></td>
                                    <td><p>250</p></td>
                                    <td><p>12A</p></td>
                                    <td><FaCloudDownloadAlt size={20} style={{ marginTop: "9px" }} /></td>
                                    <td><ImArrowDown size={15} style={{ marginTop: "12px" }} /></td>
                                </tr>
                                <tr style={{ display: drop !== songs.id ? 'none' : '' }} >
                                    <td><img src={require(`../images/new-release-cover/${songs.img}`).default} alt="hhh" /></td>
                                    <td><i className="fa fa-play"></i></td>
                                    <td><AiOutlineHeart size={20} style={{ marginTop: "10px" }} /></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </>

                        ) : null}


                    </table>
                </div>
            </div>
            {/* <img src={require(`../images/new-release-cover/${tableData.tableData.img}`).default} alt="hhh" /> */}
        </section>
    )
}

export default Tables
