const express = require('express')
const jokes = require('./data/jokes')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/jokes', (req, res) => {
  res.json(jokes)
})

app.get('/api/jokes/:id', (req, res) => {
  const joke = jokes.find((j) => j._id === req.params.id)
  res.json(joke)
})

app.listen(5000, console.log('Server running on port 5000'))
