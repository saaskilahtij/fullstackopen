import { useState } from 'react';
import { useEffect } from 'react';


const Statistics = (props) => {

  if (props.all == 0) {  
    return (<p>No feedback given</p>)
  } else {
    return (
      <div>
        <StatisticLine title="good" value={props.good}/>
        <StatisticLine title="neutral" value={props.neutral}/>
        <StatisticLine title="bad" value={props.bad}/>
        <StatisticLine title="all" value={props.all}/>
        <StatisticLine title="average" value={props.average}/>
        <StatisticLine title="positive" value={props.positive}/>
      </div>
    )
  }
}


const StatisticLine = ({title, value}) => {
  const displayValue = title === "positive" ? `${value} %` : value;
  return (
    <p>{title}: {displayValue}</p>
  )
}


const Button = ({name, handle}) => {
  return (
    <button onClick={handle}>{name}</button>
  )
} 


function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1); 
  } 

  const handleBad = () => {
    setBad(bad + 1);
  }

  useEffect(() => {
    setAll(good + neutral + bad);
    setAverage(all === 0 ? 0 : (good * 1 + bad * -1) / all);
    setPositive(all === 0 ? 0 : (good * 1) / all * 100);
  }, [good, neutral, bad, all]);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handle={handleGood}/>
      <Button name="neutral" handle={handleNeutral}/>
      <Button name="bad" handle={handleBad}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} 
      bad={bad} all={all} average={average}
      positive={positive}/>
    </div>
  );
}

export default App;