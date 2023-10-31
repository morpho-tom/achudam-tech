import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactUS from './contactus.jpg'
import "./style.css"


const ContactUs = () => {
    return (
        <>
            <div>
                <img src={ContactUS} alt="" />
            </div>
            <br /><br /><br />
            <div className="contactus-container">
                <h3>Fill out the form and we'll be in touch soon!</h3>
                <h1>How can we help you?</h1>
                <br /><br /><br />

                <Container fluid>
                    <Row>
                        <Col className="contactus-textfield-leftside"><input type="text" className="contactus-textfield" name="Name" placeholder="Name" required /></Col>
                        <Col><input type="text" className="contactus-textfield" name="Name" placeholder="Company Name" required /></Col>
                    </Row>
                    <Row>
                        <Col className="contactus-textfield-leftside"><input type="email" className="contactus-textfield" name="email" placeholder="Email Address* " required /></Col>
                        <Col><input type="text" className="contactus-textfield" name="Name" placeholder="Address*" required /></Col>
                    </Row>
                    <Row>
                        <Col className="contactus-textfield-leftside"><input type="tel" className="contactus-textfield" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Your Mobile Number" required /></Col>
                        <Col><input type="text" className="contactus-textfield" name="city" placeholder="City*" required /></Col>
                    </Row>
                    <Row>
                        <Col className="contactus-textfield-leftside"><input type="number" className="contactus-textfield" name="zipcode" placeholder="Zipcode*" /></Col>
                        <Col><input type="text" className="contactus-textfield" name="state" placeholder="State*" /></Col>
                    </Row>
                    <Row style={{textAlign:"center"}}>
                        <h2>Description</h2><br />
                        <Col sm={2}></Col>
                        <Col sm={8}> <textarea style={{ width: "800px", height: "250px" }} name="Description" spellCheck="true" placeholder="Dscribe Your Message" /></Col>
                        <Col sm={2}></Col>
                    </Row>
                    <br/><br/>
                    <div style={{textAlign: "center"}}>
                    <button className="contactus-send-button" >Sent</button>
                    </div>
                </Container>
                <br/><br/><br/><br/>

            </div>
        </>
    );
};

export default ContactUs;