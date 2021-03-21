import React from 'react'
import Reminder from './components/Reminder'
import ReminderForm from './components/ReminderForm'
import reminderService from './services/reminderService'

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
    reminderService.getAll().then((reminders) => {
      this.setState({ reminders })
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

    reminderService
      .create(reminderObject)
      .then((newReminder) => {
        const reminders = this.state.reminders.concat(newReminder)
        this.setState({
          reminders,
          newName: '',
          newTime: '',
        })
        console.log(`Added new reminder`)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteReminder = (id) => {
    if (window.confirm(`Do you really want to delete this?`)) {
      reminderService
        .remove(id)
        .then((response) => {
          this.setState({
            reminders: this.state.reminders.filter(
              (reminder) => reminder.id !== id
            ),
          })
          console.log(`Successfully delete`)
        })
        .catch((error) => console.log(error))
    }
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
          <Reminder
            key={reminder.name}
            reminder={reminder}
            removeOnClick={this.deleteReminder}
          />
        ))}
      </div>
    )
  }
}

export default App
