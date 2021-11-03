import { Carousel } from "react-bootstrap";
import image1 from "./images/Mesonet.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
import "./SlideShow.css";
const ImageSlideShow = () => {
  return (
    <Carousel className="Main" interval={null} indicators={false}>
      <Carousel.Item>
        <img src={image1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlideShow;
