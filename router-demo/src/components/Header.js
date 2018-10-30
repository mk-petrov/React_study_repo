import React from 'react'
import { Link } from 'react-router-dom'

const pageId = 3
const id = 51
const name = 'Petko'

export default () => (
  <header className='App-header'>
    <nav className='main-nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to={`/contact/params/${id}/${name}`}>ParamPage</Link></li>
        <li><Link to={'/page/with/' + pageId}>Page with id</Link></li>
      </ul>
    </nav>
  </header>
)
