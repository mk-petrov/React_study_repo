import React from 'react'

class Posts extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentWillMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(err => console.log(err))
  }

  render () {
    const postItems = this.state.posts.map(post => (
      <div key={post.id} className='post-card'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts:</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts
