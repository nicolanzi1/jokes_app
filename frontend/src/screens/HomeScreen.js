import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Footer from '../components/Footer/Footer'
import Joke from '../components/Joke/Joke'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listJokes } from '../actions/jokeActions'

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const dispatch = useDispatch()

  const jokeList = useSelector((state) => state.jokeList)
  const { loading, error, jokes } = jokeList

  useEffect(() => {
    dispatch(listJokes())
  }, [dispatch])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <h1>All Jokes</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {jokes.map((joke) => (
            <Col key={joke._id} sm={12} md={6} lg={4} xl={3}>
              <Joke joke={joke} />
            </Col>
          ))}
        </Row>
      )}
      <Footer />
    </>
  )
}

export default HomeScreen
