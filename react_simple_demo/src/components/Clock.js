import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      date: new Date()
    }
    // this.tick = this.tick.bind(this)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount () {
    this.timer = setInterval(() => this.tick(), 1000)

    // uncomment also the line 10 to used like follows
    // this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <h3>Time: {this.state.date.toLocaleTimeString()}</h3>
    )
  }
}

export default Clock
