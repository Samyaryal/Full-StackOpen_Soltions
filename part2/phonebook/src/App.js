import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nameObject ={
      name: newName
    }
    console.log(nameObject)
    setPersons(persons.concat(nameObject))
  }
  const name = () => persons.map(person => <p>{person.name}</p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit ={onSubmit}>
        <div>
          name: <input value ={newName} onChange={handleChange}  />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       <div>{name()}</div>
    </div>
  )
}

export default App;