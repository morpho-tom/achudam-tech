import React from "react";
import "./style.css"


const ContactUs = () =>{
    return(
        <>
        <div>
            <img src=" " alt="" />
        </div>
        <br/><br/><br/>
        <div className="contactus-container">
            <h3>Fill out the form and we'll be in touch soon!</h3>
            <h1>How can we help you?</h1>
            <br/><br/><br/>
            <form className="contactus-form">
            <input type="text"   name="Name" placeholder="eg.Achudam" required />
            <input type="text"   name="Name" placeholder="Company Name" required /><br/>
            <input type="email"  name="email" placeholder="Email Address* " required />
            <input type="text"   name="Name" placeholder="Address*" required /><br/>
            <input type="tel"    name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Your Mobile Number" required />
            <input type="text"   name="city" placeholder="City*" required /><br/>
            <input type="radio"  name="Product Enquiry" />
            <input type="radio"  name="Feedback" />
            <input type="radio"  name="Technical Enquiry" />
            <input type="radio"  name="Others" />
            <input type="text"  name="state"  placeholder="State*"/><br/>
            <textarea name="Description" spellCheck="true" placeholder="Your Message" />
            </form>
        </div>
        </>
    );
};

export default ContactUs;