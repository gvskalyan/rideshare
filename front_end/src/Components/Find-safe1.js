import React, { Component } from 'react'
import Select from 'react-select'
import {Button,} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import JSONDATA from "./MOCK_DATA.json";

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
      fromi:'',
      to:'',
      date:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({fromi: event.target.value, to: event.target.value, date: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <>
        <h1 className="display-4" style={{color:"#24292e"}}> Find a Ride! </h1>         
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div><label>
            From: </label></div>
            <Select name="fromi" options={options} value={this.state.value} onChange={this.handleChange} />
          <br></br>

          <div><label>
            To: </label></div>
            <Select name="to" options={options} value={this.state.value} onChange={this.handleChange} />
          <br></br>

          <div><label>
            Date: <br></br>
            <input type="date" name="date" value={this.state.value} onChange={this.handleChange} />
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