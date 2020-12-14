import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import jokes from './data/jokes.js'
import Joke from './models/jokeModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Joke.deleteMany()

    await Joke.insertMany(jokes)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Joke.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
