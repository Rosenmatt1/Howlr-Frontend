import React from 'react'
import MainButton from './MainButton.js'
import Calendar from './calendar'
import DropDownTasks from './DropDownTasks'

const Home = (props) => {
  return (
    <div class="container">

      <div className="section center-align">
        <h3>When do you need Momma?</h3>
          <Calendar 
            clickDate={props.clickDate}
            name={props.name}
            date={props.date}
            datePicked={props.datePicked}
          />
      </div>

      <br></br>
      <br></br>

      <div className="section center-align">
        { props.namePicked
          ? <p className="center-align">Selected Task:  {props.name}</p>
          : <DropDownTasks 
            options={props.options} 
            selectTask={props.selectTask}
            name={props.name}
            namePicked={props.namePicked}
            />
        }

      </div>

      <br></br>
      <br></br>

      <div className="section center-align">
        <MainButton setTask={props.setTask} />
      </div>
      
    </div>
  )
}

export default Home 