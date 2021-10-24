import { Carousel } from "react-bootstrap";
import image from "./Mesonet.jpeg";
import "./SlideShow.css";
const ImageSlideShow = () => {
  return (
    <Carousel
      style={{
        display: "block",
        "margin-left": "auto",
        "margin-right": "auto",
        width: "50%",
        "margin-top":"5%",
      }}
      interval={null}
      indicators={false}
    >
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

export default ImageSlideShow;
