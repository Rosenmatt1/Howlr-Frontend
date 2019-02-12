import React from 'react'

const Card = (props) => {
    return (
      <div className="bigDiv">
          <div className="section row">
            <div className="col s12 m6">
              <div className='card'>
                <div className="cards">
                  <div className="card-content black-text">
                    <span className="black-text card-title">Don't Forget . . .         </span>
                    <span className="right">{props.reminder.date}</span>
                    <h4>{props.reminder.name}</h4>
                    <p>{props.reminder.description}</p>
                  </div>
                  <div className="black-text card-action">
                    <div className="black-text features">
                      <a href="/#">Update</a>
                      <button className="DeleteButton" onClick={() => props.deleteReminder()}>Delete</button>
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