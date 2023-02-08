const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
} 


const Content = ({part1, exercise1, part2, exercise2, part3, exercise3}) => {
  return (
    <div>
      <p>
        {part1} {exercise1}
      </p>
      <p>
        {part2} {exercise2}
      </p>
      <p>
        {part3} {exercise3}
      </p>
    </div>
  )
}


const Total = ({exercises}) => {
  return (
    <div>
      <p>Number of exercises {exercises}</p>
    </div>
  )
} 


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1={part1} exercise1={exercises1} 
      part2={part2} exercise2={exercises2} 
      part3={part3} exercise3={exercises3}
      />
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;