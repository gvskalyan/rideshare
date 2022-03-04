import React from "react"
import Find from "./Components/Find"
import Post from "./Components/Post"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./Components/Home.css"
import NavBar from "./Components/NavBar"
import Login from "./Components/Login_2"
import SignUp from "./Components/Signup"
import About from "./Components/About"
import useToken from './useToken'
import Home from './Components/Home'




function App() {
  const { token, setToken } = useToken();



  if(!token) {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path = "/" element={<Login setToken={setToken} />} />
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <Router>
        <NavBar/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/find" element={<Find />} />
            <Route exact path="/post" element={<Post />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
