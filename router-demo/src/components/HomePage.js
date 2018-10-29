import React, { Component } from 'react'

class HomePage extends Component {
  render () {
    return (
      <h1>Hello {this.props.username}, welcome to the Home Page</h1>
    )
  }
}

export default HomePage
