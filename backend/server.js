import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import jokes from './data/jokes.js'

dotenv.config()

connectDB()

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
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
