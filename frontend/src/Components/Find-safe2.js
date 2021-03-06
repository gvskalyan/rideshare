import React, { Component } from 'react'
import Select from 'react-select'
import {Button,} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import JSONDATA from "./MOCK_DATA.json";
import Axios from 'axios';
import axios from 'axios';

const options = [
  { value: 'gainesville', label: 'Gainesville' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'jacksonville', label: 'Jacksonville' },
  { value: 'tampa', label: 'Tampa' },
  { value: 'miami', label: 'Miami' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'tallahassee', label: 'Tallahassee' }
]

class MyComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      from:'',
      to:'',
      date:''
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

  /* handleSubmit = (event) => {
    event.preventDefault();
    //alert(`${this.state.from.value} ${this.state.to.value} ${this.state.date}`)
    //axios.get('http://awesomeserver/users.username')
   // .then((response)=>{
    //  this.setState({})
   // })
   
   fetch("./MOCK_DATA.json")
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        from: data
      })
    })
    
  }*/

  

  render(){
    return(
      <>
        <h1 className="display-4" style={{color:"#24292e"}}> Find a Ride! </h1>         
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div><label>
            From: </label></div>
            <Select name="from" options={options} value={this.state.from} onChange={this.handleFromChange} />
          <br></br>

          <div><label>
            To: </label></div>
            <Select name="to" options={options} value={this.state.to} onChange={this.handleToChange} />
          <br></br>

          <div><label>
            Date: <br></br>
            <input type="date" name="date" value={this.state.date} onChange={this.handleDateChange} />
          </label></div>
          <br></br>

          <div>
            <input type="submit" color="primary mt-3" value="Find" />
          </div>

        </form>
      </>
    );
  }
}

export default MyComponent