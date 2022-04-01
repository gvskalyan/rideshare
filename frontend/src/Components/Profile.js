import React, { Component } from 'react'
import "./Find.css";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import gettingin from "./assets/gettingin.jpg"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import data from './data/Apis'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import {getUserAccessToken} from "./session/SessionHandler";
import NavBarCommon from "./NavBar_Common";
import {useState} from 'react';


function Profile(){
    const [token, setToken] = getUserAccessToken()
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const OpenAlert = (message) => {
        setMessage(message);
        setOpen(true);
      };

    const loggingOut = (event) => {
        event.preventDefault();

        data.logout().then(res => {
            OpenAlert("Logged Out Successfully");
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        });
      }

    return(
        <Section>
            <div>
                <NavBarCommon />
                <div className="background">
                    <img src={gettingin} alt="" />
                </div>
                <form>
                    <div className='Profile'>
                        <h3>Do You Wish To</h3>
                        <Button onClick={loggingOut}> LOG OUT?</Button>
                    </div>
                </form>
                
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

    h3{
        color: white;
    }
    h1{
        text-transform: uppercase;
        color: white;
    }
    .background {
        img{
            filter: brightness(40%);
        }
    }
    .Profile{
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