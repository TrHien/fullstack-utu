import React from 'react'
import Reminder from './components/Reminder'
import ReminderForm from './components/ReminderForm'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [
        {
          name: 'Buy some eggs',
          timestamp: '2018-11-10T13:00:00.141Z',
        },
      ],
      newName: '',
      newTime: '',
    }
  }

  componentDidMount() {
    console.log('did mount')
    axios.get('http://localhost:3001/reminders').then((response) => {
      console.log('promise fulfilled')
      this.setState({ reminders: response.data })
    })
  }

  // Input handle
  handleReminderChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleTimeChange = (event) => {
    this.setState({ newTime: event.target.value })
  }

  // Add form
  addReminder = (event) => {
    event.preventDefault()

    const existingName = this.state.reminders.map((reminder) => reminder.name)

    if (existingName.indexOf(this.state.newName) !== -1) {
      alert(`${this.state.newName} is already added to reminder`)
      this.setState({ newName: '' })
    }

    const timestamp = Date.parse(this.state.newTime)
    const timestampDate = isNaN(timestamp) ? new Date() : new Date(timestamp)
    const reminderObject = {
      name: this.state.newName,
      timestamp: timestampDate.toISOString(),
    }

    const reminders = this.state.reminders.concat(reminderObject)
    this.setState({
      reminders,
      newName: '',
      newTime: '',
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        <h2>Add Reminders</h2>

        <ReminderForm
          submitHandle={this.addReminder}
          name={this.state.newName}
          nameOnChange={this.handleReminderChange}
          time={this.state.newTime}
          timeOnChange={this.handleTimeChange}
        />

        <h2>Reminders</h2>

        {this.state.reminders.map((reminder) => (
          <Reminder key={reminder.name} reminder={reminder} />
        ))}
      </div>
    )
  }
}

export default App
