import { useState } from 'react';
import { useEffect } from 'react';



// Toteuta tilastojen näyttäminen HTML:n taulukkona
// Taulukon formatointi on minulle mysteeri

const Statistics = (props) => {

  if (props.all == 0) {  
    return (<p>No feedback given</p>)
  } else {
    return (
      <div>
        <StatisticLine title="good" value={props.good} width='45'/>
        <StatisticLine title="neutral" value={props.neutral} width='33'/>
        <StatisticLine title="bad" value={props.bad} width='55'/>
        <StatisticLine title="all" value={props.all} width='62'/>
        <StatisticLine title="a verage" value={props.average} width='48'/>
        <StatisticLine title="positive" value={props.positive} width='61'/>
      </div>
    )
  }
}


const StatisticLine = ({title, value, width}) => {
  const displayValue = title === "positive" ? `${value}%` : value;
  return (
    <table>
      <tbody>
        <tr>
        <td> {title}: </td> 
        <td style={{textAlign: 'right', width:`${width}px`}}> {displayValue} </td>
        </tr>
      </tbody>
    </table>
    
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

  var roundedPos = positive.toFixed(2);
  var roundedAvg = average.toFixed(2);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handle={handleGood}/>
      <Button name="neutral" handle={handleNeutral}/>
      <Button name="bad" handle={handleBad}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} 
      bad={bad} all={all} average={roundedAvg}
      positive={roundedPos}/>
    </div>
  );
}

export default App;