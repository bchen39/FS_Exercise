import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({handleClick, name}) => (
  <button onClick={handleClick}>
    {name}
  </button>
)

const Buttons = ({names, hcs}) => (
  <div>
    <Button handleClick={hcs[0]} name={names[0]}/>
    <Button handleClick={hcs[1]} name={names[1]}/>
    <Button handleClick={hcs[2]} name={names[2]}/>
  </div>
)

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
    if (props.num[0] == 0 && props.num[1] == 0 && props.num[2] == 0) {
      return (
        <div>
          {'No feedbacks given'}
        </div>
      )
    }
    return (
      <table>
        <Statistic text={props.text[0]} value={props.num[0]}/>
        <Statistic text={props.text[1]} value={props.num[1]}/>
        <Statistic text={props.text[2]} value={props.num[2]}/>
        <Statistic text={props.text[3]} value={props.num[3]}/>
        <Statistic text={props.text[4]} value={props.num[4]}/>
        <Statistic text={props.text[5]} value={props.num[5]}/>
      </table>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = (val) => {
    const positive = (val) => () => setGood(val)

    const middle = (val) => () => setNeutral(val)

    const negative = (val) => () => setBad(val)

    if (val == 'good') {
      return (positive(good + 1))
    } else if (val == 'bad') {
      return (negative(bad + 1))
    } else {
      return (middle(neutral + 1))
    }
  }

  const sum = good + neutral + bad
  const average = (good - bad) / sum
  const positive = good / sum + ' %'

  return (
    <div>
      <Header text={'give feedback'}/>
      <Buttons 
        names={['good', 'neutral', 'bad']}
        hcs={[feedback('good'), feedback('neutral'), feedback('bad')]}
      />
      <Header text={'statistics'}/>
      <Statistics 
        text={['good', 'neutral', 'bad', 'all', 'average', 'positive']}
        num={[good, neutral, bad, sum, average, positive]}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)