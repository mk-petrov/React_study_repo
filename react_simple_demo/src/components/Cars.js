import React, { Component } from 'react'
import data from '../Data'

class Cars extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cars: []
    }
  }

  componentDidMount () {
    data
      .getCars()
      .then(cars => {
        this.setState({

          cars: cars
        })
      })
  }

  render () {
    let cars = this.state.cars.map(car => (
      <tr key={car._id}>
        <td>{car.make}</td>
        <td>{car.model}</td>
      </tr>
    ))

    return <table>{cars}</table>
  }
}

export default Cars
