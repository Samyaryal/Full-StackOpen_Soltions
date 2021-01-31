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
    setPersons(persons.concat(nameObject))
    setNewName('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit ={onSubmit}>
        <div>
          name: <input onChange={handleChange}  value ={newName}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       <div>{setPersons}</div>
    </div>
  )
}

export default App;