import React from 'react'
import ReactDOM from 'react-dom'

const Header = (prop) => {
  return (
    <div>
      <h1>{prop.course}</h1>
    </div>
  )
}

const Content = (prop) => {
  return (
    <div>
      <Part part={prop.parts[0].name} exercises={prop.parts[0].exercises}/>
      <Part part={prop.parts[1].name} exercises={prop.parts[1].exercises}/>
      <Part part={prop.parts[2].name} exercises={prop.parts[2].exercises}/>
    </div>
  )
}

const Part = (prop) => {
  return (
    <div>
      <p>
        {prop.part} {prop.exercises}
      </p>
    </div>
  )
}

const Total = (prop) => {
  return (
    <div>
      <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}
      </p>
    </div>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))