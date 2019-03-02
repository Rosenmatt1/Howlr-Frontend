import React from 'react'
import '../App.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const DropDownTasks = (props) => {
  return (
    < Dropdown 
      options={props.options} 
      onChange={(event) => props.selectTask(event)}
      placeholderText= {props.namePicked 
      ? props.name
      : "Select an option"} 
    />
  )
}

export default DropDownTasks