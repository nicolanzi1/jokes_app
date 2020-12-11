import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Joke = ({ joke }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Link to={`/joke/${joke._id}`}>
          <Card.Title as="div">
            <strong>{joke.setup}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">{joke.punchline}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Joke
