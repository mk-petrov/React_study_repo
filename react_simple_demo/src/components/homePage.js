import React, { Component } from 'react'
import Header from './header'
import Clock from './Clock'
import Cars from './Cars'
import Footer from './footer'

class HomePage extends Component {
  sayHello () {
    return 'Hello from React'
  }

  render () {
    return (
      <div className='container'>
        <Header username='Petrov' />
        <Clock date={new Date()} />
        <h1>{this.props.homeMessage}</h1>
        <h1>Hello World</h1>
        <h2>React App</h2>
        <Cars />
        <Footer message='This is footer text' />
      </div>
    )
  }
}

export default HomePage
