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

function Profile(){
    const [token, setToken] = getUserAccessToken()

    return(
        <div>
            <NavBarCommon />
            <h1> USER PROFILE </h1>
        </div>
        
    );
}

export default Profile;