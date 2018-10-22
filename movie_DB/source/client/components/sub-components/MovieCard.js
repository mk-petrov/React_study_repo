import React from 'react'
import { Link } from 'react-router'

export default class MovieCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      movieScore: this.props.movie.score,
      movieVotes: this.props.movie.votes
    }
  }

  render () {
    return (
      <div className='animated fadeIn'>
        <div className='media movie'>
          
        </div>
      </div>
    )
  }
}
