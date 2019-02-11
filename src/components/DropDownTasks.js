import React from 'react'
import '../App.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const DropDownTasks = (props) => {
  return (
    < Dropdown 
      options={props.options} 
      onChange={(event) => props.selectTask(event)}
      placeholderText="Select an option" />
  )
}

export default DropDownTasks