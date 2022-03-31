import React, { Component } from 'react'
import Select from 'react-select'
import {Button,} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const options = [
  { value: 'gainesville', label: 'Gainesville' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'jacksonville', label: 'Jacksonville' },
  { value: 'tampa', label: 'Tampa' },
  { value: 'miami', label: 'Miami' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'tallahassee', label: 'Tallahassee' }
]

const MyComponent = () => (
  <>
    <h1 className="display-4" style={{color:"#24292e"}}> Find a Ride! </h1>         
    <br></br>
    <form>
      <div><label>
        From: </label></div>
        <Select options={options} />
      
      <br></br>
      <div><label>
        To: </label></div>
        <Select options={options} />
      
      <br></br>
      <div><label>
        Date: <br></br>
        <input type="date" name="date" />
      </label></div>
      <div>
        <Button color="primary mt-3">Find</Button>
      </div>
    </form>
  </> 
)

export default MyComponent