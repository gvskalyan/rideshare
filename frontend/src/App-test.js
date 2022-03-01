import React from "react";
import Find from "./Components/Find";
import Post from "./Components/Post";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import "./App.css";
import NavBar from "./Components/NavBar"
import Global from "./Components/About"
import Login from "./Components/Login_2"
import SignUp from "./Components/Signup"
import About from "./Components/About"

function App() {
  return (
  <Router>
    <Routes>
    <div className="App">
      <Route exact path="/(Login)" component={LoginContainer}/>
      <Route component={DefaultContainer}/>
    </div>
    </Routes>
  </Router>
  );
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" element={<Login />} />
    <Route exact path="/Signup" element={<SignUp />} />
  </div>
)


 const DefaultContainer = () => (
    <div>
    <div className="container">
      <NavBar />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Signup" element={<SignUp />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/find" element={<Find />} />
      <Route exact path="/post" element={<Post />} />
      <Route exact path="/about" element={<About />} />
    </div>
    </div>
 )

export default App;
