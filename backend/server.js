const express = require('express')
const dotenv = require('dotenv')
const jokes = require('./data/jokes')

dotenv.config()

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

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
