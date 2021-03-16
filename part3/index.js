const express = require ('express');
const app = express()
app.use(express.json()) 

//   console.log('Method:', request.method)
// console.log('Path:  ', request.path)
// console.log('Body:  ', request.body)

let notes = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "12345689"
  },
  {
    id: 2,
    name: "Mikko Heikkala",
    number: "001234568"
  },
  {
    id: 3,
    name: "Meri Aalto",
    number: "35912345689"
  },
  {
    id: 4,
    name: "Sami Rouhainen",
    number: "0-12345689"
  }
  
]
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

//3.1: Phonebook backend step1
app.get('/api/persons/', (req, res) => {
  res.json(notes)
})




//3.2: Phonebook backend step2
app.get('/info', (req, res) => { 
    const date = new Date()
    date1 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    res.send( `Phonebook has info for ${notes.length} people <br/>  <br />
     ${date} ` )

  })

//3.3: Phonebook backend step3
//getting a single resporce
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note){
  response.json(note)
  }
  else {response.status(404).end()}
})

//3.4: Phonebook backend step4
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const noteIndex = notes.findIndex(note => note.id === id)
  console.log(noteIndex)
  if (noteIndex === -1){ //if index not available
    response.status(404)
  }
  else {notes.splice(noteIndex, 1)
    response.send('Item deleted')}
})

//3.5: Phonebook backend step5
// app.post('/api/persons/', (request, response) => {
//   let newPhonebook = {
//     id: (Math.random (1, 1000)),
//     name: request.body.name,
//     number: request.body.number
//   }
//   const noteid = notes.filter(note => note.id == newPhonebook.id)
//   if(noteid.length > 0){
//     response.send(`item already existed`)
//   }
//   notes.push(newPhonebook)
//   response.send('new phonebook added')

// })

//3.6 Phonebook backend step6 
app.post('/api/persons/', (req, res) => {
  const {name, number} = req.body
  let newPhonebook = {
        id: (Math.random (1, 1000)),
        name,
        number
      }

  if (!name && !number){
    res.status(400).json({error : error})
  }
  let finding = notes.filter((item => (item.name=== name) || (item.number === number)))
  if (finding.length > 0){
    res.status(400).json({error : `name or number already existed`})()
  }
  else {
    notes.push(newPhonebook)
    res.send(`PhoneBook successfully added`)}
})


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)

//deleting a single respource 
// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })


//Fetching a single resource
// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find(note => note.id === id)
//   response.json(note)
// })