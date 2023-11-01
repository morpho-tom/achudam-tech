import React from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import powerplantimg from "./power-plant.jpg";
import Card from 'react-bootstrap/Card';
import Body1 from "./body1";
import Carousel from '../image-Carousel/index';
import animated1 from './animated1.gif'
import animated2 from './animation2.gif'
import animated3 from './animation3.gif'
import animated4 from './animation4.gif'


const Home = () => {
  
    return (
        <>
            <Carousel /><br /><br /><br /><br /><br /><br />
            <div className="home-section">
                <br />
                <Row>
                    <Col md={4} className="about-para-one">
                        <h2>About AchudamTech</h2>
                        <br />
                        <p> Accroding to Bio-chemical
                            <br /> of India.<br />
                        </p> <button className="explore-button">Explore</button>
                    </Col>
                    <Col md={4} className="about-para-two">
                    
                        <p><img src={animated1} alt="animated"/>Various educators teach rules governing the length of paragraphs.</p>
                    </Col>
                    <Col md={4} className="about-para-two">
                        <p><img src={animated2} alt="animated"/>Various educators teach rules governing the length of paragraphs.</p>
                    </Col>
                    <Col md={4}></Col>
                    <Col md={{ span: 4, offset: 0 }} className="about-para-two">
                        <p><img src={animated3} alt="animated"/>Various educators teach rules governing the length of paragraphs.
                        </p>
                    </Col>
                    <Col md={{ span: 4, offset: 0 }} className="about-para-two">
                        <p> <img src={animated4} alt="animated"/> Various educators teach rules governing the length of paragraphs.

                        </p>
                    </Col>
                </Row>
            </div>
            <br /><br /><br /><br /><br /><br />
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img className="img-fluid" src={powerplantimg} alt="Card image" />
                    <Card.ImgOverlay>
                        
                        <Card.Title xs={6} md={4} className="card-title1">
                            <span>Atomic Research</span>
                        </Card.Title>
                        <Card.Text xs={6} md={4} className="card-content">
                            <p>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                        </Card.Text>
                        <Card.Text xs={6} md={4} className="card-content1"><p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div><br /><br /><br /><br /><br /><br />
            <Body1 />
        </>
    )
}

export default Home;