import React, { Component } from 'react'

import Routes from './Routes'
import Header from './components/Header'
// import HomePage from './components/HomePage'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App
