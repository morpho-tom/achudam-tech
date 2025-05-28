import React from "react";
import { Row, Col, Typography, Image } from "antd";
import "./style.css";
import OpenImage from "./openingimg.jpg";
import SideImage from "./openingimg.jpg";
import SideImage2 from "./openingimg.jpg";
import DownImage from "./openingimg.jpg";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Header Image */}
      <Image
        src={OpenImage}
        preview={false}
        className="aboutus-header-image"
        alt="Opening"
        width="100%"
        height={400}
        style={{ objectFit: "cover" }}
      />

      {/* Section 1 */}
      <Row
        gutter={[32, 32]}
        align="middle"
        className="aboutus-section"
        style={{ padding: "50px 20px" }}
      >
        <Col xs={24} md={12}>
          <Image
            src={SideImage}
            alt="Side"
            preview={false}
            className="aboutus-side-image"
            width="100%"
            style={{ borderRadius: "12px" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={2} style={{ color: "#146d41" }}>
            About Us
          </Title>
          <Paragraph className="aboutus-text">
            A functional interface can have any number of default methods.
            Runnable, ActionListener, and Comparable are some of the examples
            of functional interfaces. These are also known as Single Abstract
            Method (SAM) Interfaces.
          </Paragraph>
        </Col>
      </Row>

      {/* Banner with Text */}
      <Image
        src={DownImage}
        preview={false}
        width="100%"
        height={400}
        style={{ objectFit: "cover", marginBottom: 40 }}
        alt="Down Banner"
      />
      <div style={{ padding: "0 20px 50px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <Paragraph className="aboutus-text" style={{ textAlign: "justify" }}>
          A functional interface can have any number of default methods.
          Runnable, ActionListener, and Comparable are some of the examples
          of functional interfaces. These interfaces are used in lambda
          expressions, method references, and streams API. They help in
          writing cleaner and more modular functional code.
        </Paragraph>
      </div>

      {/* Final Section */}
      <Row
        gutter={[32, 32]}
        align="middle"
        className="aboutus-section"
        style={{ padding: "0 20px 80px 20px" }}
      >
        <Col xs={24} md={12}>
          <Image
            src={SideImage2}
            alt="Side 2"
            preview={false}
            width="100%"
            style={{ borderRadius: "12px" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Paragraph className="aboutus-text">
            Runnable, ActionListener, and Comparable are examples of functional
            interfaces in Java. These are used to represent lambda expressions
            or method references and have only one abstract method. This makes
            them ideal for concise implementations.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
