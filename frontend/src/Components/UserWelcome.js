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
import { useState, useEffect } from 'react'
import {getKeyUser, setUserDetails} from "./session/SessionHandler";


function Profile(){
    const [token, setToken] = getUserAccessToken(); 
    const [keyuser, setKeyUser] = useState(getKeyUser());
    //const [advice, setAdvice] = useState("");
    var nameData = JSON.parse(keyuser);

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
            <div className="background">
                <img src={gettingin} alt="" />
            </div>
            <div className="WelcomePage">
                <h1 style={{color:'white'}}> WELCOME, {nameData.Name}! </h1>
                
                <br/> <br/>
                <h3 style={{color:'white'}}>
                  RideShare makes travel more convinient and affordable to the users. <br/>
                  Searching for a ride or a companion? We could offer you hassle-free trips <br/>
                  If you are travelling with a few empty seats, we will try to make your trip <br/> a bit profitable
                  by finding you some good company.
                </h3>
                <br/> <br/>
                <h3 style={{color:'white'}}> What can we help you with today? </h3>
                <br/> <br/>
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

    h1{
        text-transform: uppercase;
    }
    .background {
        img{
            filter: brightness(60%);
        }
    }
    .WelcomePage{
        margin-top: 13rem;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .title{

            p {
                text-align: center;
                padding: 0 15vw;
                margin-top: 0.5rem;
                font-size: 1.2rem;
              }

            }
        }
    }
    
`;