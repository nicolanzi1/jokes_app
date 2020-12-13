import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
// import { Col, Row } from 'react-bootstrap'
import Joke from '../components/Joke'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
// import axios from 'axios'

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  )
}

// const HomeScreen = () => {
//   const [jokes, setJokes] = useState([])

//   useEffect(() => {
//     const fetchJokes = async () => {
//       const { data } = await axios.get('/api/jokes')

//       setJokes(data)
//     }

//     fetchJokes()
//   }, [])

//   return (
//     <>
//       <h1>All Jokes</h1>
//       <Row>
//         {jokes.map((joke) => (
//           <Col sm={12} md={6} lg={4} xl={3}>
//             <Joke joke={joke} />
//           </Col>
//         ))}
//       </Row>
//     </>
//   )
// }

export default HomeScreen
