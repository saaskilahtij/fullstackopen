import { useState } from 'react';
import { useEffect } from 'react';


const Statistics = (props) => {
  return (
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.all}</p>
      <p>average: {props.average}</p>
      <p>positive: {props.positive}</p>
    </div>
  )
}

// Refaktoroi sovelluksesi siten, että tilastojen näyttäminen on eriytetty 
// oman komponentin Statistics vastuulle. Sovelluksen tila säilyy 
// edelleen juurikomponentissa App.

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
  // useEffect koukku, joka päivittyy kun [arvo, arvo, arvo] muuttuu.
  useEffect(() => {
    setAll(good + neutral + bad);
    setAverage(all === 0 ? 0 : (good * 1 + bad * -1) / all);
    setPositive(all === 0 ? 0 : (good * 1) / all * 100);
  }, [good, neutral, bad, all]);


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} 
      bad={bad} all={all} average={average}
      positive={positive}/>
    </div>
  );
}

export default App;
