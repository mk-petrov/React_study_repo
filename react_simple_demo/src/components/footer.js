import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer className='app-footer'>
        <p>{this.props.message}</p>
      </footer>
    )
  }
}

export default Footer
