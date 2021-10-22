import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PMAS from './Components/PMAS';
import file from './data.json';
import Navigation from './Components/Navigation';
import BATV from './Components/BATV';




function App() {
  return (

    <div className="container"style = {{background:"#CA1C0D",display:"flexbox"}}>
      <div className="item"><BATV/></div>
        <div className="item" style = {{display:"flexbox"}}><PMAS/></div>
        <div className="item"><Navigation/></div>
    </div>

  );
}

export default App;
