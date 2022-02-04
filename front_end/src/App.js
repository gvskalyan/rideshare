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
  );
}

export default App;
