import { useState } from 'react';
import ShowPerson from './components/ShowPerson';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';


const App = () => {
    
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  
  const addName = (event) => {
    event.preventDefault();
  
    const isNameInList = persons.some(person => person.name === newName);
  
    if (!isNameInList) {
      const person = {
        name: newName,
        number: newNumber,
        key: persons.length + 1
      };
      setPersons(persons.concat(person));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newName} is already on the phonebook`);
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const personsToShow = persons.filter(person => 
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


