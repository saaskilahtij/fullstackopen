import { useState, useEffect } from 'react';
import noteService from './services/notes'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import Notification from './components/Notification';


// Comment this code for added understanding!
// Delete message vielä! Stailaus valmis!
const App = () => {

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notes, setNotes] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes);
    }) 
    },[notes]);
  

const addName = (event) => {
    event.preventDefault();
  
    const isNameInList = notes.some(person =>
      person.name.toLowerCase().replace(/\s+/g, '') === newName.toLowerCase().replace(/\s+/g, ''));
  
    const person = {
      name: newName,
      number: newNumber,
    };

    if (!isNameInList) {
  
      noteService
      .create(person)
      .then(() => {
        notes.concat(person);
      });
      setNewName('');
      setNewNumber('');
      setSuccessMessage(`Added ${newName}`);
      
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000);

    } else {
      
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?
      `);

      if (result) {
        const updatedPerson = {...notes.find((p) => p.name === newName), number: newNumber};

        noteService
        .update({id: updatedPerson.id, newObject: updatedPerson})
        .then(() => {
          const notesUpdatedWithNewNumber = notes.map((p) => 
            p.id === updatedPerson.id ? updatedPerson : p
          );
          setNotes(notesUpdatedWithNewNumber);
          setNewName('');
          setNewNumber('');
          setSuccessMessage(`Updated ${newName}`);
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000);
        }); 
      }
    }
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
  
  const handleDeletion = ({ id, name }) => {

    const result = window.confirm(`Delete ${name} ?`) 

    if (result) {
      noteService
      .remove({id: id})
      .then(() => {
        setNotes(notes.filter(person => person.id !== id))
      });
    }
    
  };
  //person.id !== id
  const personsToShow = notes.filter(person => 
    person.name.toLowerCase().startsWith(filter.toLowerCase().trim())
  );


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage}/>
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
        <PersonList 
          persons={personsToShow}
          handleDeletion={handleDeletion}
        />
      </div>
    </div>
  )

}

export default App;


