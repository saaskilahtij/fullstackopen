import { useState } from 'react';


const Button = ({name, handle}) => {
  return (
    <button onClick={handle}> {name} </button>
  )
} 


function App() {
  const [selected, setSelected] = useState(0);
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ];
  
  const points = [0, 0, 0, 0, 0, 0, 0, 0];
  const copy = [...points];

  const generateInt = () => {
    setSelected(Math.floor(Math.random() * 8));
  }
  const handleVote = () => {
    copy[selected] += 1;
    console.log(copy);
  }
 
  // Aina kun generateInt, niin alustaa copy listan

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <Button handle={handleVote} name='vote'/>
      <Button handle={generateInt} name='next anecdote'/>
    </div>
  )
}

export default App;
