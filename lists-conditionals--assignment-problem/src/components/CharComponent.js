import React, { Component } from 'react'

class CharComponent extends Component {

  styleComponent = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  render () {
    return (
      <div style={this.styleComponent} onClick={this.props.click}>{this.props.char}</div>
    )
  }
}

export default CharComponent
