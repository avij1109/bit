import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Notice from './components/Notice/Notice'
import Visionary from './components/Visionary/Visionary'
import Footer from './components/Footer/Footer'
import Principal from './components/Principal/Principal'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Notice/>
      <Visionary/>
      <Principal/>
      <Footer/>
    </div>
  )
}

export default App