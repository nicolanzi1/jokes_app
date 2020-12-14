import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Joke from '../models/jokeModel.js'

// @desc    Fetch all jokes
// @route   GET /api/jokes
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const jokes = await Joke.find({})

    res.json(jokes)
  })
)

// @desc    Fetch single jokes
// @route   GET /api/jokes/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const joke = await Joke.findById(req.params.id)

    if (joke) {
      res.json(joke)
    } else {
      res.status(404)
      throw new Error('Joke not found')
    }
  })
)

export default router
