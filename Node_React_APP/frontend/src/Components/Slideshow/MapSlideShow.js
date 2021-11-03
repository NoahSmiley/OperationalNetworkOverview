import { Carousel } from "react-bootstrap";
import image from "./images/Mesonet.jpeg";
import "./SlideShow.css";
const MapSlideShow = () => {
  return (
    <Carousel className="Main" interval={null} indicators={false}>
      <Carousel.Item>
        <img src={image} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} alt="" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MapSlideShow;
