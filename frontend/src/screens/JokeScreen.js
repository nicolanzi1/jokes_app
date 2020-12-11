import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import jokes from '../jokes'

const JokeScreen = ({ match }) => {
  const joke = jokes.find((j) => j._id === match.params.id)

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>{joke.setup}</h2>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </>
  )
}

export default JokeScreen
