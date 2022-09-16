import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(10))


  const nextAnecdote = (props) => {
    setSelected(props)
  }

  const newVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button text="Next anecdote" handleClick={() => nextAnecdote(() => Math.floor(Math.random() * anecdotes.length))} />
      <Button text="Vote" handleClick={() => newVote()}/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[votes.indexOf(Math.max.apply(0, votes))]}</p>
      <p>has {votes[votes.indexOf(Math.max.apply(0, votes))]} votes</p>
    </div>
  )
  }

export default App
