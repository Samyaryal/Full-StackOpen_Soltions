import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
  { name: 'Arto Hellas', number: '040-123456' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newSearch, setNewSearch] = useState([])
  
  const compare = persons.filter((item)=> item.name === newName)

  const onSubmit = (event) => {
    event.preventDefault()
    const nameObject ={
      name: newName,
      number: newNumber
    }
    if (compare.length === 0){
      setPersons(persons.concat(nameObject)) 
      
    }else{ alert(`${newName} is already in the phonebook`)}
    
  };

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  };

  const handleNewSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const search = persons.filter(person => person.name === newSearch)
   
  const name_row = () => persons.map(person => <p>{person.name}</p>)
  const number_row = () => persons.map(person => <p>{person.number}</p>)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input value ={newSearch} onChange={handleNewSearch}  on/></div>
      <div>filtered list :</div>
      <div>{ search.map((item)=> <li>{ item.name} {item.number}</li>)}</div>
      <hr />
      <form onSubmit ={onSubmit}>
        <div>
          name: <input value ={newName} onChange={handleNameChange}  />
          number: <input value ={newNumber} onChange ={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       <div>{name_row()} {number_row()}</div>
    </div>
  )
}

export default App;