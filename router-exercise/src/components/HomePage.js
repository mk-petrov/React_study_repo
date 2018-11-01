import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  sixNewestBooks () {
    return 'newBooks'
  }

  render () {
    return (
      <main>
        <h1>Book content - main section</h1>
      </main>
    )
  }
}

export default HomePage
