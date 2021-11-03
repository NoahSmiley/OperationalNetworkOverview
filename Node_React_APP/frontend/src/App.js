import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";
import Navigation from "./Components/UI/Navigation";
import CentralReport from "./Components/Central Report/CentralReport";
import ImageSlideShow from "./Components/Slideshow/ImageSlideShow";
import MapSlideShow from "./Components/Slideshow/MapSlideShow";
import { BrowserRouter as Switch, Route } from "react-router-dom";

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
  function handleArrowLeft() {
    console.log("Left");
  }
  function handleArrowRight() {
    console.log("Right");
  }
  useKey("ArrowLeft", handleArrowLeft);
  useKey("ArrowRight", handleArrowRight);

  return (
    <div>
      {/* Switch Controles React Router - and links the navbar to components */}

      <Switch>
        <Route exact path="/central-report" component={CentralReport} />
        <Route path="/images" component={ImageSlideShow} />
        <Route path="/maps" component={MapSlideShow} />
      </Switch>

      {/* NavBar */}
      <Navigation />
    </div>
  );
}

export default App;
