import React from 'react'

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
      filteredName: '',
    }
  }

  handleReminder = (event) => {
    this.setState({ newName: event.target.value })
  }

  addReminder = (event) => {
    event.preventDefault()
    console.log('Success')
    const reminderObject = {
      name: this.state.newName,
      timestamp: new Date(),
    }

    const reminders = this.state.reminders.concat(reminderObject)

    this.setState({
      reminders,
      newName: '',
    })
  }

  render() {
    return (
      <div>
        <h2>Add Reminders</h2>
        <form onSubmit={this.addReminder}>
          <div>
            Topic:{' '}
            <input value={this.state.newName} onChange={this.handleReminder} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <h2>Reminders</h2>
        {this.state.reminders.map((topic) => (
          <p key={topic.name}>{topic.name}</p>
        ))}
      </div>
    )
  }
}

export default App
