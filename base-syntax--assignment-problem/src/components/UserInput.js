import React from 'react'

const inputStyle = {
  marginRight: '2em'
}

const userInput = (props) => (
  <div className='userInput'>
    Username: <input style={inputStyle} type='text' onChange={props.changedName} value={props.name} />
    Age: <input style={inputStyle} type='number' onChange={props.changedAge} value={props.age} />
  </div>
)

export default userInput
