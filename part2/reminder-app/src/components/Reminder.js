import React from 'react'

const Reminder = ({ reminder }) => {
  const timestamp = new Date(reminder.timestamp)
  const timestampString = `${timestamp.toLocaleString()}`
  return (
    <div>
      <p>
        {timestampString}&nbsp;&nbsp;
        {reminder.name}
      </p>
    </div>
  )
}
export default Reminder
