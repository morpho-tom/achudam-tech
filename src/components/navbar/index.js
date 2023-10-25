// import React, { useState } from 'react'; 
import { Component } from "react";
import "./style.css";
import logo from '../../Assets/Amtlogo.png';
import SearchPopup from "./searchpopup"




class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    
    render() {
        return (
            <div>
                <div>
                    <nav>
                        <img src={logo} style={{ width: "124px", height: "115px" }} alt="brand" />
                        <div>
                            <ul
                                id="navbar"
                                className={this.state.clicked ? "#navbar active" : "#Navbar"}
                            >
                                <li>
                                    <a href= "index.html" >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">Products</a>
                                </li>
                                <li>
                                    <a href="index.html">Activity</a>
                                </li>
                                <li>
                                    <a href="index.html">Contact us</a>
                                </li>
                                <li>
                                    <a href="index.html">About us</a>
                                </li>
                                <SearchPopup/>
                                {/* <input className= "fa-solid fa-magnifying-glass" /> */}
                            </ul>
                        </div>
                        <div id="mobile" onClick={this.handleClick}>
                            <i
                                id="bar"
                                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                            >
                                {" "}
                            </i>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbar;
