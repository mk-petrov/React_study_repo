import React, { Component } from 'react'

class HomePage extends Component {
  redirectToAbout () {
    this.props.history.push('/about')
  }

  render () {
    return (
      <div>
        <h1>Hello {this.props.username}, welcome to the Home Page</h1>
        <button onClick={this.redirectToAbout.bind(this)}>Redirect to About page</button>
      </div>
    )
  }
}

export default HomePage
