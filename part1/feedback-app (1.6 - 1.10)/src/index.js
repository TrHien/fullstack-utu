import React from 'react'
import ReactDOM from 'react-dom'

// represents a button
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// displays the statitics
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

// rendering a single row of statistics
const Statistics = ({ good, neutral, poor }) => {
  if (good === 0 && neutral === 0 && poor === 0) {
    return <p>ei yhtään palautetta annettu</p>
  }

  const all = good + neutral + poor
  const average = (good + neutral * 0 + poor * -1) / all
  const positive = (good / all) * 100 + ' %'

  return (
    <div>
      <table>
        <tbody>
          <Statistic value={good} text="hyvä" />
          <Statistic value={neutral} text="neutraali" />
          <Statistic value={poor} text="huono" />
          <Statistic value={average} text="keskuarvo" />
          <Statistic value={positive} text="positiivisia" />
        </tbody>
      </table>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      poor: 0,
    }
  }

  goodHandler = () => this.setState({ good: this.state.good + 1 })

  neutralHandler = () => this.setState({ neutral: this.state.neutral + 1 })

  poorHandler = () => this.setState({ poor: this.state.poor + 1 })

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <Button handleClick={this.goodHandler} text="hyvä" />
        <Button handleClick={this.neutralHandler} text="neutraali" />
        <Button handleClick={this.poorHandler} text="huono" />

        <h2>statistiikka</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          poor={this.state.poor}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
