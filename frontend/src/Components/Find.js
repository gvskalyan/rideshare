import React, {Component} from 'react'
import Select from 'react-select'
import gettingin from "./assets/gettingin.jpg"
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import NavBarCommon from "./NavBar_Common";
import data from "./data/Apis";
import {Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListSubheader} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import {getKeyUser} from "./session/SessionHandler";

const options = [
    {value: 'gainesville', label: 'Gainesville'},
    {value: 'orlando', label: 'Orlando'},
    {value: 'jacksonville', label: 'Jacksonville'},
    {value: 'tampa', label: 'Tampa'},
    {value: 'miami', label: 'Miami'},
    {value: 'orlando', label: 'Orlando'},
    {value: 'tallahassee', label: 'Tallahassee'}
]

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
            rides: []
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

        const search = `{
        "FromCity": "${this.state.from.value}",
        "ToCity": "${this.state.to.value}",
        "StartTime": "${this.state.date}"
    }`;

        data.searcharide(search).then(res => {
            this.setState({
                rides: res.Value
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

    bookRide =  (ride) => {
        const user = JSON.parse(getKeyUser());
        const booking = `{
            "RideID": "${ride.ID}",
            "UserMail": "${user.Email}",
            "Phone": "${user.PhoneNumber}"
        }`;
        alert("Ride booked");
    }

    render() {

        return (
            <div>
                <Section>
                    <div>
                        <NavBarCommon/>
                    </div>

                    <div className="background">
                        <img src={gettingin} alt=""/>
                    </div>
                    <div className='FindPageContent'>
                        <h1 className="display-4" style={{color: 'white'}}> FIND A RIDE! </h1>
                        <br/>
                        <form class="finding" onSubmit={this.handleSubmit}>
                            <label class="la"> From:</label> <br/>
                            <Select name="from" options={options} value={this.state.from}
                                    onChange={this.handleFromChange}/>
                            <br></br>

                            <label class="la"> To: </label> <br/>
                            <Select name="to" options={options} value={this.state.to} onChange={this.handleToChange}/>
                            <br></br>

                            <label class="la"> Date: </label> <br/>
                            <input type="datetime-local" name="date" value={this.state.date}
                                   onChange={this.handleDateChange}/>

                            <br/>

                            <input type="submit" color="primary mt-3" value="Find"/>

                        </form>
                    </div>
                </Section>
                <List align="center" sx={{width: '100%', bgcolor: 'background.paper'}}>
                    <ListSubheader
                        inset
                    >
                        <h2> Search Results: </h2>
                    </ListSubheader>
                    {this.state.rides.map((ride) => (
                        <div key={ride.ID}>
                            <ListItem alignItems="center"
                                      secondaryAction={
                                          <IconButton edge="end">
                                              <CommentIcon/>
                                          </IconButton>
                                      }>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={ride.Name}
                                    secondary={
                                        <React.Fragment>
                                            Start Time - {this.getTime(ride.ToStartTime)}
                                            <br/>
                                            End Time - {this.getTime(ride.ToEndTime)}
                                            <br/>
                                            Seats Left - {ride.seatsAvailable}
                                            <br/>
                                            Price Per Seat - {ride.priceperseat}$
                                            <br/>
                                            <Button variant="outlined" align="right" onClick={() => this.bookRide(ride)}>Book Ride</Button>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                        </div>
                    ))}


                </List>
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
  .FindPageContent {
    margin-top: 6rem;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    .finding {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 2rem;
      padding-left: 13.5rem;
      border-radius: 1rem;
      width: 40%;
      background-color: rgba(0, 0, 0, 0.6);
      border: 4px solid rgb(255, 255, 255, 0.6);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
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