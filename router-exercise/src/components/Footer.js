import React, { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <footer className='page-footer'>
        <p>Petko Petrov 2018 <a href='https://github.com/mk-petrov' target='blank'>Github</a></p>
      </footer>
    )
  }
}

export default Footer
