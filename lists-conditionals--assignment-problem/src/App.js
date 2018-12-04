import React, { Component } from 'react'
import './App.css'
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'

class App extends Component {
  state = {
    chars: []
  }
  
  text = null  

  printTextLength = (e) => {
    let newTextLength = e.target.value.length
    let newValue = [...e.target.value]
    this.setState({textLength: newTextLength, chars: newValue})
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.chars]
    chars.splice(index, 1)
    this.setState({chars: chars})
  } 

  render () {
    this.text = (
      <div>
        {this.state.chars.map((char,index) => {
          return <CharComponent char={char} key={index} click={() => this.deleteCharHandler(index)} />
        })}
      </div>
    )

    return (
      <div className='App'>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div>
          <h2>Solution:</h2>
          <input type='text' value={this.state.chars.join('')} onChange={this.printTextLength}></input>
          <p>{this.state.chars.length}</p>
          <ValidationComponent length={this.state.textLength} />
          {this.text}
        </div>
      </div>
    )
  }
}

export default App
