import React from 'react'

class AnimalCard extends React.Component {
  state = {
    showText: false
  }

  toggleTextHandler = () => {
    const doesShow = this.state.showText

    this.setState({showText: !doesShow})
  }

  render () {
    let text = null
    if (this.state.showText) {
      text = (
        <p>Show me some text!</p>
      )
    }

    return (
      <div>
        <button onClick={this.toggleTextHandler}>Toggle text</button>
        {text}
      </div>
    )
  }
}

export default AnimalCard
