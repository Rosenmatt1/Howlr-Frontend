import React from 'react'
import { props } from 'bluebird';

const Card = (props) => {
    return (
      <div className="bigDiv">
          <div className="section row">
            <div className="col s12 m6">
              <div className='card'>
                <div className="cards">
                  <div className="card-content black-text">
                    <span className="black-text card-title">Don't Forget . . .</span>
                    <h4>{props.reminderName}</h4>
                    <p>{props.reminderDescription}</p>
                  </div>
                  <div className="black-text card-action">
                    <div className="black-text features">
                      <a href="/#">Update</a>
                      <a href="/#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
  export default Card