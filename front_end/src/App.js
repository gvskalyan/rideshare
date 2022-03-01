import React from "react";
import Find from "./Components/Find";
import Post from "./Components/Post";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import "./App.css";
import NavBar from "./Components/NavBar"
import Global from "./Components/Home"
import Login from "./Components/Login_2"
import SignUp from "./Components/Signup"

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Global />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<Find />} />
          <Route path="/post" element={<Post />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
