import {React} from "react";
import './style.css'
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";


const ImgCarousel = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay  >
        <div className="imgs">
          <img src="../Images/one.jpg" alt="physics" />
        </div>
        <div className="imgs">
          <img src="../Images/two.jpg" alt="physics" />
        </div>
        <div className="imgs">
          <img src="../Images/three.jpg" alt="physics" />
        </div>
        <div className="imgs">
          <img src="../Images/four.jpg" alt="physics" />
        </div>
        <div className="imgs">
          <img src="../Images/five.png" alt="physics" />
        </div>

      </Carousel>
    </div>
  )
}

export default ImgCarousel;