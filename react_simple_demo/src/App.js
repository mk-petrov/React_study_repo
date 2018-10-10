import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    let catsData = [
      { id: 1, name: 'Miau', age: 5 },
      { id: 2, name: 'Silvester', age: 3 },
      { id: 3, name: 'Moon', age: 2 },
      { id: 4, name: 'Shadow', age: 1 }
    ]

    let catsList = catsData.map(cat => (
      <li key={cat.id}>
        My name is {cat.name}. I'm {cat.age} years old.
      </li>
    ))

    return (
      <ul>
        {catsList}
      </ul>
    )
  }
}

export default App
