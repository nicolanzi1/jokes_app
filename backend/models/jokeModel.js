import mongoose from 'mongoose'

const jokeSchema = mongoose.Schema(
  {
    _type: {
      type: String,
      required: true,
    },
    setup: {
      type: String,
      required: true,
    },
    punchline: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Joke = mongoose.model('Joke', jokeSchema)

export default Joke
