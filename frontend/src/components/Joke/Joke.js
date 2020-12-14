import React from 'react'
import { Link } from 'react-router-dom'
import { JokeText } from './JokeElements'

const Joke = ({ joke }) => {
  return (
    <>
      <Link to={`/joke/${joke._id}`}>
        <strong>{joke.setup}</strong>
      </Link>

      <JokeText as="div">
        <div>{joke.punchline}</div>
      </JokeText>
    </>
  )
}

export default Joke
