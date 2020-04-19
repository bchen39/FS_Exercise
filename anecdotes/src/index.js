import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (
  <h1>{text}</h1>
)
const Anecdote = (props) => (
  <div>
    <p>
      {props.anecdote}
    </p>
    <p>
      {'has ' + props.vote + ' votes'}
    </p>
  </div>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})

  const sel = (val) => () => setSelected(val)
  const vote = (val) => () => {
    const copy = { ...points }
    copy[val] += 1
    setPoints(copy)
  }

  const rand = Math.floor(Math.random() * (props.anecdotes.length))
  const maxVote = () => {
    let max = 0, maxInd = 0
    for (let i = 0; i < props.anecdotes.length; i++) {
      const curr = points[i]
      if (curr > max) {
        maxInd = i
        max = curr
      }
    }
    return maxInd
  }

  return (
    <div>
      <Header text={'Anecdote of the day'}/>
      <Anecdote anecdote={props.anecdotes[selected]} vote={points[selected]}/>
      <div>
        <Button handleClick={vote(selected)} text={'vote'}/>
        <Button handleClick={sel(rand)} text={'next anecdote'}/>
      </div>
      <Header text={'Anecdote with most votes'}/>
      <Anecdote anecdote={props.anecdotes[maxVote()]} vote={points[maxVote()]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
