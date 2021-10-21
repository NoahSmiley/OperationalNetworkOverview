import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PMAS from './Components/PMAS';
import file from './data.json';




function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <code>OPERATIONAL NETWORK OVERVIEW</code> 
        <PMAS></PMAS>
      </header>
    </div>

    </Router>
  );
}

export default App;
