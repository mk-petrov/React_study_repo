import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <header>
        <nav>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo'><span>FREE</span> Book Library</Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/books/all'>All Books</Link></li>
              <li><Link to='/authors/all'>Authors</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
