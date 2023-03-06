import { useState } from 'react';





// Lisää nimiä! 
const App = () => {
  
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
    }
    setPersons(person);
    setNewName('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App


