import React from 'react'

class Postform extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }

    this.changeInput = this.changeInput.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  changeInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm (e) {
    e.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render () {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.submitForm}>
          <div>
            <label>Title: </label>
            <br />
            <input type='text' name='title' value={this.state.title} onChange={this.changeInput} />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name='body' value={this.state.body} onChange={this.changeInput} />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Postform
