import React from 'react'
import '../App.css'
import image from "./howlr.jpg"
import { props } from 'bluebird';


const MainButton = (props) => {
  return (
    <div>
      <button className="callMomButton" onClick={(event) => props.setTask(event)}>
        <img src={image} alt="call mom"></img>
      </button>
    </div>
  )
}



export default MainButton