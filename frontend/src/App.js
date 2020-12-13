import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <HomeScreen />
    </Router>
  )
}

export default App
