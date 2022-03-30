import React, { Component } from 'react'
import "./Find.css";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import gettingin from "./assets/gettingin.jpg"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import data from './data/Apis'
import SnackBar from "./SnackBar";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import {getUserAccessToken} from "./session/SessionHandler";
import NavBarCommon from "./NavBar_Common";
import { withRouter } from "react-router-dom";


function Profile(){
    const [token, setToken] = getUserAccessToken()
    let navigate = useNavigate();
    const navigateToFind = () => {
        navigate("/Find", { replace: true });
    }
    const navigateToPost = () => {
        navigate("/Post",{replace: true });
    }

    return(
        <Section>
            <NavBarCommon />
            <div className="WelcomePage">
                <h1> WELCOME, USER-NAME! </h1>
                <br/>
                <h3> What can we help you with today? </h3>
                <br/>
                <Button onClick={navigateToFind}>Find a Ride</Button>
                &nbsp; &nbsp;
                <Button onClick={navigateToPost}>Post a Ride</Button>
            </div>
        </Section>
    );
}

export default Profile;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    .WelcomePage{
        margin-top: 10rem;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }
    }
    
`;