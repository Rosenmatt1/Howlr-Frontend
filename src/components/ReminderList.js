import React from 'react'
import Card from './Card'
import { props } from 'bluebird';

const ReminderList = (props) => {
    return (
     props.remindersTable.map(reminder => {
        return(
            <div><Card reminder={reminder} reminderName={reminder.name} reminderDescription={reminder.description}/></div>
        )
    })
)
}

export default ReminderList