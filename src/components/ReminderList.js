import React from 'react'
import Card from './Card'
// import { props } from 'bluebird';

const ReminderList = ({remindersTable}) => {
    return (
    remindersTable.map(reminder => {
        return(
            <div><Card reminder={reminder} /></div>
        )
    })
)
}

export default ReminderList 