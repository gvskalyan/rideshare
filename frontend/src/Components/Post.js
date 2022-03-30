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
import NavBarCommon from "./NavBar_Common";

const OpenAlert = (m) => {
};



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

const petsAllow = [
  { value: 'yes', label: 'Yes'},
  { value: 'no', label: 'No'}
]

class MyComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      name:'',
      sLoc:'',
      from:'',
      to:'',
      dLoc:'',
      price:'',
      sTime:'',
      dTime:'',
      duration:'',
      capacity:'',
      pets:'',
      cmodel:'',
      ctype:'',
      adnotes:'',
      phnumber:'',
      open:'',
      message:''
    };
  }
  
  handleNameChange = (Name)=>{
      this.setState({
        name: Name.target.value
      });
  }

  handlesLocChange = (event)=>{
    this.setState({
      sLoc: event.target.value
    });
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
  handledLocChange = (event)=>{
    this.setState({
      dLoc: event.target.value
    });
  }

  handlePriceChange = (event)=>{
    this.setState({
      price: event.target.value
    })
  }

  handlesTimeChange = (event) =>{
    this.setState({
      sTime: event.target.value
    })
  }

  handledTimeChange = (event)=>{
    this.setState({
      dTime: event.target.value
    })
  }

  handlesDurationChange = (event)=>{
    this.setState({
      duration: event.target.value
    })
  }

  handleCapChange = (selectedOption) => {
    this.setState({
      capacity: selectedOption
    })
  }

  handlePetsChange = (selectedOption) => {
    this.setState({
      pets: selectedOption
    })
  }

  handlecModelChange = (event) => {
    this.setState({
      cmodel: event.target.value
    })
  }

  handlecTypeChange = (event) => {
    this.setState({
      ctype: event.target.value
    })
  }

  handleadNotesChange = (event) => {
    this.setState({
      adnotes: event.target.value
    })
  }

  handlephNumChange = (event) => {
    this.setState({
      phnumber: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //alert(`Here: ${this.state.name} ${this.state.sLoc} ${this.state.from.value} ${this.state.to.value} ${this.state.dLoc} ${this.state.price} ${this.state.sTime} ${this.state.dTime} ${this.state.duration} ${this.state.capacity.value} ${this.state.pets.value} ${this.state.cmodel} ${this.state.ctype}`)
      
      const ride = `{
        "Name": "${this.state.name}",
        "StartLocation": "${this.state.sLoc}",
        "FromCity": "${this.state.from.value}",
        "ToCity": "${this.state.to.value}",
        "DestLocation": "${this.state.dLoc}",
        "Price": "${this.state.price}",
        "StartTime": "${this.state.sTime}",
        "EndTime" : "${this.state.dTime}",
        "RideDuration" : "${this.state.duration}",
        "SeatAvailable": "${this.state.capacity.value}",
        "PetsAllowed": "${this.state.pets.value}",
        "carModel": "${this.state.cmodel}",
        "carType": "${this.state.ctype}",
        "AddlNotes": "${this.state.adnotes}",
        "PhoneNumber": "${this.state.phnumber}"
      }`;
      data.postaride(ride).then(res => {
        alert("Posted Successfully");
        window.location = 'About';

    });
  }

  render(){
    
    return(
      <Section>
        <div>
          <NavBarCommon />
        </div>
        <div className="background">
          <img src={gettingin} alt="" />
        </div>
        <div className='FindPageContent'>
        <h1 className="display-4" style={{color:'white'}}> POST A RIDE! </h1>         
        <br/>

          <form class="posting" onSubmit={this.handleSubmit}>

            <label class="la"> Name: <br/>
              <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleNameChange}></input>
            </label><br/>

            <label class="la"> Starting Location:
              <input type="text" name="fromLoc" id="fromLoc" value={this.state.sLoc} onChange={this.handlesLocChange}></input>
            </label><br/>

            <label class="la"> From:</label><br/>
              <Select class="opt" name="from" options={options} value={this.state.from} onChange={this.handleFromChange} />
            <br/>
            
            <label class="la"> To: </label><br/>
              <Select name="to" options={options} value={this.state.to} onChange={this.handleToChange} />
            <br/>

            <label class="la"> Destination Location:
              <input type="text" name="destLoc" id="destLoc" value={this.state.dLoc} onChange={this.handledLocChange}></input>
            </label><br/>

            <label class="la"> Price of a seat:
              <input type="number" name="price" id="price" value={this.state.price} onChange={this.handlePriceChange}></input>
            </label><br/>

            <label class="la"> Start Time:
              <input type="datetime-local" name="startTime" id="startTime" value={this.state.sTime} onChange={this.handlesTimeChange}></input>
            </label><br/>

            <label class="la"> End Time:
              <input type="datetime-local" name="endTime" id="endTime" value={this.state.dTime} onChange={this.handledTimeChange}></input>
            </label><br/>

            <label class="la"> Duration:
              <input type="number" name="duration" id="duration" value={this.state.duration} onChange={this.handlesDurationChange}></input>
            </label><br/>

            <label class="la"> Capacity: </label><br/>
              <Select name="Capacity" options={capAvail} value={this.state.cap} onChange={this.handleCapChange}/>
            <br/>

            <label class="la"> Pets Allowed?: </label><br/>
              <Select name="pets" options={petsAllow} value={this.state.pets} onChange={this.handlePetsChange}/>
            <br/>

            <label class="la"> Car Model:
              <input type="text" name="carModel" id="carModel" value={this.state.cModel} onChange={this.handlecModelChange}></input>
            </label><br/>

            <label class="la"> Car Type:
              <input type="text" name="cartype" id="carType" value={this.state.cType} onChange={this.handlecTypeChange}></input>
            </label><br/>

            <label class="la"> Additional Notes:
              <input type="text" name="adnotes" id="adnotes" value={this.state.adnotes} onChange={this.handleadNotesChange}></input>
            </label><br/>

            <label class="la"> Phone Number:
              <input type="tel" id="phone" name="phone" value={this.state.phNum} onChange={this.handlephNumChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            </label><br/>

            <div>
              <input type="submit" color="primary mt-3" value="Post the Ride" />
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
      margin-top: 0.01rem;
      height: 100%;
      width: 245%;
      filter: brightness(60%);
    }
  }
  .FindPageContent {
    margin-top: 12rem;
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
      padding-left: 11rem;
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