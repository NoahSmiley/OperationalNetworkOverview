import "./App.css";
import Navigation from "./Components/UI/Navigation";
import CentralReport from "./Components/Central Report/CentralReport";
import ImageSlideShow from './Components/Slideshow/ImageSlideShow';
import MapSlideShow from './Components/Slideshow/MapSlideShow';
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
        {/* Switch Controles React Router - and links the navbar to components */}
        <Switch>
            <Route exact path="/central-report" component={CentralReport} />
            <Route path="/images" component={ImageSlideShow} />
            <Route path="/maps" component={MapSlideShow} />
        </Switch>
        <Navigation/>
    </div>
  );
}

export default App;
