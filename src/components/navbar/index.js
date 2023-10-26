// import React, { useState } from 'react'; 
import { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../Assets/Amtlogo.png';
import SearchPopup from "./searchpopup"
// import Home from "../home";
// import AboutUs from "../aboutus";




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
                                    <Link className="navbar-item" activeClassName="is-active" to="/">
                                        Home
                                    </Link>

                                </li>
                                <li>
                                <Link to="Product">Products</Link>
                                </li>
                                <li>
                                <Link to="index.html">Activity</Link>
                                </li>
                                <li>
                                    <Link to="index.html"> Contact us </Link>
                                </li>
                                <li>
                                    <Link to="/Aboutus"> About us</Link>
                                </li>
                                <SearchPopup />
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
