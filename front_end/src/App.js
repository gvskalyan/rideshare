import React from "react"
import Find from "./Components/Find"
import Post from "./Components/Post"
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom"
import "./Components/Home.css"
import NavBar from "./Components/NavBar"
import Login from "./Components/Login_2"
import SignUp from "./Components/Signup"
import About from "./Components/About"
import Home from './Components/Home'
import {isUserLoggedIn} from "./Components/session/SessionHandler";

function RequireAuth({ children }) {
    return isUserLoggedIn() ? children : <Navigate to="/login" replace />;
}


function App() {

    return (
    <Router>
        <NavBar/>
        <div>
          <Routes>
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
            />
            <Route
                path="/home"
                element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
            />
            <Route
                path="/find"
                element={
                    <RequireAuth>
                        <Find />
                    </RequireAuth>
                }
            />
            <Route
                path="/post"
                element={
                    <RequireAuth>
                        <Post />
                    </RequireAuth>
                }
            />
            <Route
                path="/about"
                element={
                    <RequireAuth>
                        <About />
                    </RequireAuth>
                }
            />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
