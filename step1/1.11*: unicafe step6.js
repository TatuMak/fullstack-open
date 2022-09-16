import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad, all, mean}) => {
  if (all === 0) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }
  
  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
        <tr>
          <td><StatisticLine text="good" value={good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="neutral" value={neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad" value={bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="all" value={all} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="average" value={mean / all} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="positive" value={good / all * 100 + "%" } /></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [mean, setMean] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setMean(mean + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setMean(mean + 0)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setMean(mean - 1)
  }

  return (
    <div>
      <h2>Give feedback.</h2>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} mean={mean} />
    </div>
  )
}

export default App
