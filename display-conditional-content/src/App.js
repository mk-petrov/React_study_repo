import React, { Component } from 'react'
import Person from './components/PersonCard'
import SecondWay from './components/SecondWay'
import './App.css'

class App extends Component {
  state = {
    persons: [
      {id: 'qwe', name: 'Ivan', age: '25'},
      {id: 'wes', name: 'Petko', age: '26'},
      {id: 'qas', name: 'Stoyan', age: '27'},
      {id: 'asd', name: 'Simon', age: '28'}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons

    this.setState({showPersons: !doesShow})
  }

  style = {
    cursor: 'pointer',
    padding: '10px',
    border: '2px solid #ccc'
  }

  render () {
    // INLINE STYLE IN RENDER METHOD
    // const btnStyle = {
    //   cursor: 'pointer',
    //   padding: '10px',
    //   backgroundColor: 'grey'
    // }

    return (
      <div className='App'>
        <h1>Display Conditional content</h1>
        <button 
        style={this.style} 
        onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide' : 'Show'} Persons</button>
        {/* <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button> */}
        
        { this.state.showPersons ?
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> : null
        }
        <SecondWay />
      </div>
    )
  }
}

export default App
