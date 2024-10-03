import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Notice from './components/Notice/Notice'
import Visionary from './components/Visionary/Visionary'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Notice/>
      <Visionary/>
    </div>
  )
}

export default App