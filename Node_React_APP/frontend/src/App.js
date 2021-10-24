import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PMAS from "./Components/PMAS";
import file from "./data.json";
import Navigation from "./Components/Navigation";
import BATV from "./Components/BATV";
import DelayedTime from "./Components/DelayedTime";
import SlideShow from "./Components/Slideshow/SlideShow";

function App() {
  return (
    // <div
    //   className="container"
    //   style={{ background: "#CA1C0D", display: "flexbox" }}
    // >
    //   <div className="item" style={{ display: "flexbox" }}>
    //     <BATV />
    //   </div>
    //   <div className="item" style={{ display: "flexbox" }}>
    //     <DelayedTime />
    //   </div>
    //   <div className="item" style={{ display: "flexbox" }}>
    //     <PMAS />
    //   </div>
    //   <div className="item" style={{ display: "flexbox" }}>
    //     <BATV />
    //   </div>
    //   <div className="item">
    //     <Navigation />
    //   </div>
    // </div>
    <div>
      <SlideShow></SlideShow>
      <Navigation/>
    </div>
  );
}

export default App;
