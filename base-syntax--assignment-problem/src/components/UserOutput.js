import React, { Component } from 'react'

class UserOutput extends Component {
  divStyle = {
    backgroundColor: '#eee',
    padding: '2em 1em',
    margin: '1em',
    border: '1px solid grey',
    display: 'inline-block',
  }
  render () {
    return (
      <div style={this.divStyle}>
        <p>Hello, my name is {this.props.username}</p>
        <p>I am {this.props.age} years old</p>
      </div>
    )
  }
}

export default UserOutput
