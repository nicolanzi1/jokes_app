import React from 'react'
import { Col, Row } from 'react-bootstrap'
import jokes from '../jokes'
import Joke from '../components/Joke'

const HomeScreen = () => {
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
