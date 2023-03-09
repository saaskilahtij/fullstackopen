import { useState, useEffect } from 'react';
import noteService from './services/notes'
import Filter from './components/Filter';
import DeleteName from './components/DeleteName';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';



const App = () => {
    

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notes, setNotes] = useState([]);


  useEffect(() =>
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes);
    }), []);

  // Tallenna serverille noteService screate avulla
  const addName = (event) => {
    event.preventDefault();
  
    const isNameInList = notes.some(person => person.name === newName);
  
    if (!isNameInList) {
      const person = {
        name: newName,
        number: newNumber,
        key: notes.length + 1
      };
      setNotes(notes.concat(person));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already on the phonebook`);
    }
  }

  const deleteName = () => {

  }


  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow = notes.filter(person => 
    person.name.toLowerCase().startsWith(filter.toLowerCase().trim())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <Filter filter={filter} onChange={handleFilterChange}/>
        </div>
        <div>
          <PersonForm name={newName} onNameChange={handleNameChange}
            number={newNumber} onNumberChange={handleNumberChange} 
            onSubmit={addName} />
        </div>
      </form>    
      <h2>Numbers</h2>
      <div>
        <PersonList persons={personsToShow}/>
      </div>
    </div>
  )

}

export default App;


