import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import powerplantimg from "./power-plant.jpg";
import Card from "react-bootstrap/Card";
import Carousel from "../image-Carousel/index";
import animated1 from "./animated1.gif";
import animated2 from "./animation2.gif";
import animated3 from "./animation3.gif";
import animated4 from "./animation4.gif";
import Productimg from "./productimg.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const [active, setActive] = useState("firstcard");

  // Enhanced fade-in animation with staggered timing
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: 'blur(10px)'
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  // Smooth floating animation for GIFs
  const floatVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Enhanced product button animations
  const buttonHover = {
    scale: 1.15,
    backgroundColor: "#1e9258",
    color: "#fff",
    boxShadow: "0 4px 15px rgba(30, 146, 88, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30
    }
  };

  const renderContent = (text) => (
    <Row className="align-items-center my-4">
      <Col xs={12} md={5} className="mb-3 mb-md-0">
        <motion.img
          src={Productimg}
          className="img-fluid rounded"
          alt="product"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </Col>
      <Col xs={12} md={7}>
        <motion.p
          className="product-science-para"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {text}
        </motion.p>
      </Col>
    </Row>
  );

  return (
    <>
      <Carousel />

      {/* Animated introduction section */}
      <motion.div
        className="home-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Row>
          <Col md={4} className="about-para-one">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About AchudamTech
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Accroding to Bio-chemical of India.
            </motion.p>
            <motion.button
              className="explore-button"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1e9258",
                color: "#fff",
                boxShadow: "0 4px 15px rgba(30, 146, 88, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Explore
            </motion.button>
          </Col>

          {/* Animated GIF columns */}
          {[animated1, animated2, animated3, animated4].map((gif, index) => (
            <Col key={index} md={4} className="about-para-two">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.img
                  src={gif}
                  alt={`animated-${index + 1}`}
                  variants={floatVariants}
                  style={{ y: index % 2 ? 10 : -10 }}
                />
                Various educators teach rules governing the length of paragraphs.
              </motion.p>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* Animated card section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-dark text-white">
          <Card.Img className="img-fluid" src={powerplantimg} alt="Card image" />
          <Card.ImgOverlay>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card.Title className="card-title1">
                <span>Atomic Research</span>
              </Card.Title>
              <Card.Text className="card-content">
                <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </Card.Text>
              <Card.Text className="card-content1">
                <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </Card.Text>
            </motion.div>
          </Card.ImgOverlay>
        </Card>
      </motion.div>

      {/* Animated product selection */}
      <motion.div
        className="product-head text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="product-head1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Products
        </motion.h2>
        <ul className="d-flex justify-content-center flex-wrap gap-3 mt-3">
          {['Chemical', 'Physics', 'Maths'].map((topic, index) => (
            <motion.button
              key={topic}
              className="product-button-topic"
              whileHover={buttonHover}
              onClick={() => setActive(topic.toLowerCase() + "card")}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {topic}
            </motion.button>
          ))}
        </ul>
      </motion.div>

      {/* Animated content section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {active === "firstcard" && renderContent("Chemical product description goes here.")}
        {active === "secondcard" && renderContent("Physics product description goes here.")}
        {active === "thirdcard" && renderContent("Maths product description goes here.")}
      </motion.div>
    </>
  );
};

export default Home;