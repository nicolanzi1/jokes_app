import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Joke from '../components/Joke'
import axios from 'axios'

const HomeScreen = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const fetchJokes = async () => {
      const { data } = await axios.get('/api/jokes')

      setJokes(data)
    }

    fetchJokes()
  }, [])

  return (
    <>
      <h1>All Jokes</h1>
      <Row>
        {jokes.map((joke) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Joke joke={joke} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
