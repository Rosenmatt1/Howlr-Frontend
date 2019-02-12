import React from 'react'
import Card from './card'

const ReminderList = (props) => {
    return (
    props.remindersTable.map((reminder, idx) => {
        return(
            <Card deleteReminder={props.deleteReminder} key={idx} reminder={reminder} />
        )
    })
)
}

export default ReminderList 