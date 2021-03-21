import React from 'react'

const ReminderForm = ({
  submitHandle,
  name,
  nameOnChange,
  time,
  timeOnChange,
}) => {
  return (
    <form onSubmit={submitHandle}>
      <div>
        Topic: <input value={name} onChange={nameOnChange} />
      </div>

      <div>
        At time:{' '}
        <input type="datetime-local" value={time} onChange={timeOnChange} />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default ReminderForm
