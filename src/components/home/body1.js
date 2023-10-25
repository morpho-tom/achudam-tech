import React from "react";
import './style.css'
import Productimg from "./productimg.jpg"


const Body1 = () =>{
    return(
        <>
        <div className="product-head">
        <h2 className="product-head1"> Products</h2>
        <br/>
       <ul>
        <button onClick={producttopic1} className="product-topic">chemical</button>
        <button  className="product-topic" >physics</button>
        <button className="product-topic" >maths </button>
       </ul>
       </div>
        </>
    )
}
const producttopic1 =() =>{
    return(
        <>
        <div>
            <img src={Productimg} alt="product-imgs"/>
        </div>
        </>
    )
}

export default Body1;