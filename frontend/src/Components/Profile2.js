import React, {Component} from 'react'
import Select from 'react-select'
import gettingin from "./assets/gettingin.jpg"
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import NavBarCommon from "./NavBar_Common";
import data from "./data/Apis";
import {CardActions, CardContent, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import {getKeyUser} from "./session/SessionHandler";
import Typography from "@mui/material/Typography";
import {Card, CardHeader} from "reactstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SnackBar from "./SnackBar";

const options = [
    {value: 'Gainesville', label: 'Gainesville'},
    {value: 'Orlando', label: 'Orlando'},
    {value: 'Jacksonville', label: 'Jacksonville'},
    {value: 'Tampa', label: 'Tampa'},
    {value: 'Miami', label: 'Miami'},
    {value: 'Orlando', label: 'Orlando'},
    {value: 'Tallahassee', label: 'Tallahassee'}
]

const formatTime = (date) =>{
    return date.substring(0,10)
    // + ' ' + date.substring(11, 16)
  }

function CommentIcon() {
    return null;
}

class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            date: '',
            rides: [],
            open: false,
            message: '',
            keyuser: getKeyUser(),
            nameData: ''
        };
    }


    handleFromChange = (selectedOption) => {
        this.setState({
            from: selectedOption
        })
    }

    handleToChange = (selectedOption) => {
        this.setState({
            to: selectedOption
        })
    }

    handleDateChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.rideHistory();
    }

    rideHistory = () => {
        data.rideHistory().then(res => {
            this.setState({
                rides: res
            });
            console.log(this.state.rides);
        });
    }

    getTime = (dateString) => {
        let date = new Date(dateString);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    bookRide = (ride) => {
        const user = JSON.parse(getKeyUser());
        const booking = `{
            "RideID": "${ride.ID}",
            "UserMail": "${user.Email}",
            "Phone": "${user.PhoneNumber}"
        }`;

        data.bookaride(booking).then(res => {
            this.OpenAlert("Ride booked successfully. Details can be seen in Ride History section of homepage");
            setTimeout(() => {
                window.location = 'home';
            }, 3000);
        });
    }

    OpenAlert = (message) => {
        this.setState({
            message: message,
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        var nameData = JSON.parse(this.state.keyuser);
        return (
            <div>
                <SnackBar open={this.state.open} handleClose={this.handleClose} message={this.state.message}/>
                <Section>
                    <div>
                        <NavBarCommon/>
                    </div>

                    <div className="background">
                        <img src={gettingin} alt=""/>
                    </div>
                    <div className='Profile'>
                        <h1 className="display-4" style={{color: 'white'}}> USER DETAILS </h1>
                        <br/>
                        <form className="finding">
                            <div className='details'>
                                <p> Name: {nameData.Name}</p>
                                <p> Email: {nameData.Email}</p>
                                <p> Date of Birth: {nameData.DOB}</p>
                                <p> Gender: {nameData.Gender}</p>
                                <p>Phone Number: {nameData.PhoneNumber}</p>
                                <p>City: {nameData.City}</p>
                            </div>

                        </form>
                        <form className='historyButton' onSubmit={this.handleSubmit}>
                                <input type="submit" color="primary mt-3" value="Ride History"/>
                            </form>
                    </div>
                </Section>
                <Container maxWidth="md">
                    <h2> Ride History: </h2>
                    <br/>
                    {this.state.rides.map((ride) => (
                        <Box mb={1} key={ride.ID}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Date: {formatTime(ride.ToStartTime)}
                                        <br/>
                                        From: {ride.fromCity}
                                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                        To: {ride.toCity}
                                    </Typography>
                                    <Typography variant="body2">
                                        Price - ${ride.priceperseat}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}

                </Container>
                <br/>
            </div>
        );
    }
}

export default MyComponent

const Section = styled.section`
position: relative;
  width: 100%;
  height: 100%;
  .background {
    img {
      margin-top: 0.01rem;
      height: 15%;
      width: 100%;
      filter: brightness(60%);
    }
  }
  h1{
    text-transform: uppercase;
    color: white;
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
    }
}
    .historyButton{
        margin: auto;
        padding: 2rem;
        display: grid;
        gap: 2rem;
        width: 30%;
    }

    .finding {
      margin: 0 auto;
      box-sizing: border-box;
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-left: 13.5rem;
      border-radius: 0rem;
      width: 40%;
      background-color: rgba(0, 0, 0, 0.6);
      border: 4px solid rgb(255, 255, 255, 0.6);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .details{
        text-align: left;
        color: white;
        justify-content: center;
    }
      .finding-label{
        color:white;
      }
      .la{
        color:white;
      }
    input {
      background-color: white;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
    }   
  }
    .title {
      color: white;
      h1 {
        color: white;
        margin-top: 0rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 15vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
`;