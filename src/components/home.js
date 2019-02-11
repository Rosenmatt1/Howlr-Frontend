import React from 'react'
import MainButton from './MainButton.js'
import Calendar from './calendar'
import DropDownTasks from './DropDownTasks'

const Home = (props) => {
  return (
    <div class="container">

      <div className="section center-align">
        <h3>When do you need, Momma?</h3>
          <Calendar clickDate={props.clickDate} />
      </div>

      <br></br>
      <br></br>

      <div className="section center-align">
        <DropDownTasks options={props.options} />
      </div>

      <br></br>
      <br></br>

      <div className="section center-align">
        <MainButton />
      </div>
      
    </div>
  )
}

export default Home 