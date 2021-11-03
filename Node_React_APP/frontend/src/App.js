import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";
import Navigation from "./Components/UI/Navigation";
import CentralReport from "./Components/Central Report/CentralReport";
import ImageSlideShow from "./Components/Slideshow/ImageSlideShow";
import MapSlideShow from "./Components/Slideshow/MapSlideShow";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

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
      history.push("/");
      window.location.reload(false);
    } else if (history.location.pathname === "/") {
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
      history.push("/");
      window.location.reload(false);
    }
  }
  useKey("ArrowLeft", handleArrowLeft);
  useKey("ArrowRight", handleArrowRight);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={CentralReport} />
        <Route path="/images" component={ImageSlideShow} />
        <Route path="/maps" component={MapSlideShow} />
      </Switch>

      {/* NavBar */}
      <Navigation />
    </div>
  );
}
export default App;
