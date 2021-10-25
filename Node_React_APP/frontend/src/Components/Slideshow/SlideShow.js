import { Carousel } from "react-bootstrap";
import BATV from "../BATV";
import PMAS from "../PMAS";
import DelayedTime from "../DelayedTime";
import ImageSlideShow from "./ImageSlideShow";
import Technician from "../Technician";

const SlideShow = () => {
  return (
    <Carousel indicatorLabels={["Central", "Images", "Maps"]} interval={null}>
      <Carousel.Item style={{ "margin-bottom": "100px" }}>
        <div
          className="container"
          style={{ background: "#CA1C0D;", display: "flexbox" }}
        >
          <div className="item" style={{ display: "flexbox" }}>
            <BATV />
          </div>
          <div className="item" style={{ display: "flexbox" }}>
            <DelayedTime />
          </div>
          <div className="item" style={{ display: "flexbox" }}>
            <PMAS/>
          </div>
          <div className="item" style={{ display: "flexbox" }}>
            <Technician/>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item style={{ "margin-bottom": "5%" }}>
        <ImageSlideShow />
      </Carousel.Item>

      <Carousel.Item style={{ "margin-bottom": "5%" }}>
        <ImageSlideShow />
      </Carousel.Item>
    </Carousel>
  );
};
export default SlideShow;
