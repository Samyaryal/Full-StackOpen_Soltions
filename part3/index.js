const express = require ('express');
const app = express()
app.use(express.json()) 

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

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)
//deleting a single respource 
// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })

//Receiving data
// app.post('/api/notes', (request, response) => {
//   const note = request.body
//   console.log(note)
//   response.json(note)
// })
// app.get('/info', (req, res) => {
//   const number = req.notes;
//   if (number.length > 0 ){
//     return (`Phonebook has a info for ${number} people`) 
//   }
// })




//Fetching a single resource
// app.get('/api/notes/:id', (request, response) => {
//   const id = request.params.id
//   const note = notes.find(note => note.id === id)
//   response.json(note)
// })