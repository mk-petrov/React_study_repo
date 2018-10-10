import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>{this.props.username}</li>
        </ul>
      </nav>
    )
  }
}

export default Header
