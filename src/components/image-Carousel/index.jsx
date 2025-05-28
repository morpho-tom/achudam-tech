import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

const ImgCarousel = () => {
  return (
    <Carousel fade interval={3000} pause={false} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 imgs"
          src="../Images/one.jpg"
          alt="Slide 1"
          // style={{ height: "500px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgs"
          src="../Images/two.jpg"
          alt="Slide 2"
          // style={{ height: "500px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgs"
          src="../Images/three.jpg"
          alt="Slide 3"
          // style={{ height: "500px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgs"
          src="../Images/four.jpg"
          alt="Slide 4"
          // style={{ height: "500px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgs"
          src="../Images/five.png"
          alt="Slide 5"
          // style={{ height: "500px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImgCarousel;
