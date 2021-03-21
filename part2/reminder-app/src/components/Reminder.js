import React from 'react'

const Reminder = ({ reminder, removeOnClick }) => {
  const timestamp = new Date(reminder.timestamp)
  const timestampString = `${timestamp.toLocaleString()}`
  return (
    <div>
      <p>
        {timestampString}&nbsp;&nbsp;
        {reminder.name}&nbsp;
        <button onClick={() => removeOnClick(reminder.id)}>Delete</button>
      </p>
    </div>
  )
}
export default Reminder
