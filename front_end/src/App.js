<<<<<<< Updated upstream
import React from "react";
import Find from "./Components/Find";
import Post from "./Components/Post";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css";
import NavBar from "./Components/NavBar"
import Global from "./Components/Home"

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <div className="extra"></div>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Global}/>
        <Route exact path="/Find" component={Find}/>
        <Route exact path="/Post" component={Post} />
      </Switch>
      </div>
    </Router>     
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
