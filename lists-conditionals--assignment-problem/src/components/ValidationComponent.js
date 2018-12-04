import React from 'react'

class ValidationComponent extends React.Component {

  render () {
    let validationMessage = null
    let textLength = this.props.length

    if (textLength <= 5) {
      validationMessage = 'Text too short'
    } else if (textLength >= 6 && textLength < 100) {
      validationMessage = 'Text long enough'
    } else {
      validationMessage = 'Text too long'
    }

    return (
      <p>{validationMessage}</p>
    )
  }
}

export default ValidationComponent
