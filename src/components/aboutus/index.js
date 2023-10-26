import React from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OpenImage from "./openingimg.jpg"
import SideImage from "./openingimg.jpg"
import SideImage2 from "./openingimg.jpg"
import DownImage from "./openingimg.jpg"

const AboutUs = () => {
    return (
        <>
            <div>
                <img src={OpenImage} className="Aboutus-open-image" alt="opening-imgs" />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Row>
                <Col><img src={SideImage} className="Aboutus-side-image" alt="side-imgs" /></Col>
                <Col style={{ padding: 30 }}>
                    <h1 style={{ color: '#146d41' }}>About Us</h1>
                    <p className="Aboutus-para">A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces</p></Col>
            </Row>
            <br /><br /><br /><br /><br /><br /><br /><br />

            <div>
                <img src={DownImage} width={1400} height={700} alt="down-imgs" />
                <br /><br /><br />
                <p className="Aboutus-para">
                    A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfacesA functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfacesA functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces
                </p>
            </div>
            <br /><br /><br /><br />
            <div>
                <Row>
                    <Col><img src={SideImage2} className="Aboutus-Down-img" alt="Down-side-imgs" /></Col>
                    <Col style={{ padding: 30 }}>

                        <p className="Aboutus-para">A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces A functional interface can have any number of default methods. Runnable, ActionListener, and Comparable are some of the examples of functional interfaces. Functional Interface is additionally recognized as Single Abstract Method Interfaces. In short, they are also known as SAM interfaces</p></Col>
                </Row>
                <br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        </>
    );
};


export default AboutUs;