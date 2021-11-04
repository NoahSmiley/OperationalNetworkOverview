import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";
import Navigation from "./Components/UI/Navigation";
import CentralReport from "./Components/Central Report/CentralReport";
import ImageSlideShow from "./Components/Slideshow/ImageSlideShow";
import MapSlideShow from "./Components/Slideshow/MapSlideShow";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import GoogleFontLoader from "react-google-font-loader";

function useKey(key, cb) {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });
  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [key]);
}

function App() {
  const history = useHistory();
  function handleArrowLeft() {
    if (history.location.pathname === "/images") {
      history.push("/central-report");
      window.location.reload(false);
    } else if (history.location.pathname === "/central-report") {
      console.log(history.location);
      history.push("/maps");
      window.location.reload(false);
    } else if (history.location.pathname === "/maps") {
      console.log(history.location);
      history.push("/images");
      window.location.reload(false);
    }
  }
  function handleArrowRight() {
    if (history.location.pathname === "/images") {
      history.push("/maps");
      window.location.reload(false);
    } else if (history.location.pathname === "/") {
      console.log(history.location);
      history.push("/images");
      window.location.reload(false);
    } else if (history.location.pathname === "/maps") {
      console.log(history.location);
      history.push("/central-report");
      window.location.reload(false);
    }
  }
  useKey("ArrowLeft", handleArrowLeft);
  useKey("ArrowRight", handleArrowRight);

  return (
    <div style={{"font-family": 'Roboto',"letter-spacing": '0.075em'}}>
      <Switch>
        <Route exact path="/central-report" component={CentralReport} />
        <Route exact path="/images" component={ImageSlideShow} />
        <Route exact path="/maps" component={MapSlideShow} />
      </Switch>

      {/* NavBar */}
      <Navigation />
    </div>
  );
}
export default App;
