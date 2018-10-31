import React, { Component } from 'react'
import queryString from 'query-string'

class ParamPage extends Component {
  render () {
    let params = this.props.match.params
    let id = params.id
    let name = params.name

    let queryStringObj = queryString.parse(this.props.location.search)
    console.log(queryStringObj)
    return (
      <div>
        <h1>Param Page</h1>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
      </div>
    )
  }
}

export default ParamPage
