import React, { Component } from 'react'
import "./Find.css";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import gettingin from "./assets/gettingin.jpg"
import styled from "styled-components"


import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const options = [
  { value: 'gainesville', label: 'Gainesville' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'jacksonville', label: 'Jacksonville' },
  { value: 'tampa', label: 'Tampa' },
  { value: 'miami', label: 'Miami' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'tallahassee', label: 'Tallahassee' }
]

const capAvail = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    ]

class MyComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      from:'',
      to:'',
      date:'',
      capacity:''
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
  handleCapChange = (selectedOption) => {
    this.setState({
      capacity: selectedOption
    })
  }
  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
//    alert(`${this.state.from.value} ${this.state.to.value} ${this.state.date} ${this.state.capacity.value}`)
      
      const ride = `{
        "Name" : "",
        "StartLocation": "",
        "FromCity": "${this.state.from.value}",
        "ToCity": "${this.state.to.value}",
        "DestLocation": "",
        "Price": "",
        "StartTime": "",
        "EndTime" : "",
        "RideDuration" : "",
        "SeatAvailable": "${this.state.capacity.value}",
        "PetsAllowed": "",
        "carModel": "",
        "carType": "",
        "AddlNotes": "",
        "PhoneNumber": ""
      }`;
      /*data.post(ride).then(res => {
      OpenAlert("Posted Successfully");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });*/
  }

  render(){
    
    return(
      <Section>
        <div className="background">
          <img src={gettingin} alt="" />
        </div>
        <div className='FindPageContent'>
        <h1 className="display-4" style={{color:'white'}}> Post a Ride! </h1>         
        <br/>

          <form class="posting" onSubmit={this.handleSubmit}>

            <label class="la"> Name: <br></br>
              <input type="text" name="name" id="name" ></input>
            </label><br/>

            <label class="la"> Starting Location:
              <input type="text" name="fromLoc" id="fromLoc" ></input>
            </label><br/>

            <label class="la"> From:
              <Select name="from" options={options} value={this.state.from} onChange={this.handleFromChange} />
            </label><br></br>
            
            <label class="la"> To: 
              <Select name="to" options={options} value={this.state.to} onChange={this.handleToChange} />
            </label><br></br>

            <label class="la"> Destination Location:
              <input type="text" name="destLoc" id="destLoc" ></input>
            </label><br/>

            <label class="la"> Price of a seat:
              <input type="number" name="price" id="price" ></input>
            </label><br/>

            <label class="la"> Start Time:
              <input type="datetime-local" name="startTime" id="startTime" ></input>
            </label><br/>

            <label class="la"> End Time:
              <input type="datetime-local" name="endTime" id="endTime" ></input>
            </label><br/>

            <label class="la"> Duration:
              <input type="number" name="price" id="price" ></input>
            </label><br/>

            <label class="la"> Capacity: 
              <Select name="Capacity" options={capAvail} value={this.state.capacity} onChange={this.handleCapChange} />
            </label><br></br>

            <label class="la"> Pets Allowed?: &nbsp;
              <input type="radio" name="pets" id="pets" value="yes"/><label>Yes</label>
              &nbsp; &nbsp;
              <input type="radio" name="pets" id="pets" value="no"/><label>No</label>
            </label><br/>

            <label class="la"> Car Model:
              <input type="text" name="carModel" id="carModel" ></input>
            </label><br/>

            <label class="la"> Car Type:
              <input type="text" name="cartype" id="carType" ></input>
            </label><br/>

            <div>
              <input type="submit" color="primary mt-3" value="Find" />
            </div>

          </form>
        </div>
      </Section>
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
      height: 100%;
      width: 215%;
      filter: brightness(60%);
    }
  }
  .FindPageContent {
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
    
    .posting {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 2rem;
      padding-left: 12.5rem;
      border-radius: 1rem;
      width: 40%;
      background-color: rgba(0, 0, 0, 0.6);
      border: 4px solid rgb(255, 255, 255, 0.6);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .la{
        color:white;
      }
      .finding-label{
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