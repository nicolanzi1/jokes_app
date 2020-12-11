import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, ListGroup } from 'react-bootstrap'
import axios from 'axios'

const JokeScreen = ({ match }) => {
  const [joke, setJoke] = useState([])

  useEffect(() => {
    const fetchJoke = async () => {
      const { data } = await axios.get(`/api/jokes/${match.params.id}`)

      setJoke(data)
    }

    fetchJoke()
  }, [])

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
