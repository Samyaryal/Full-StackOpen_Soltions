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

app.get('/api/persons/', (req, res) => {
  res.json(notes)
  res.end(JSON.stringify(notes))
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)