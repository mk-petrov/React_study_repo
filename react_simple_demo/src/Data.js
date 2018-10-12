const data = {
  getCars: () => {
    return new Promise((resolve, reject) => {
      // simulating fetch data from API
      setTimeout(() => {
        resolve([
          {_id: 1, make: 'Opel', model: 'Astra'},
          {_id: 2, make: 'Opel', model: 'Insignia'},
          {_id: 3, make: 'Opel', model: 'Corsa'},
          {_id: 4, make: 'BMW', model: '530'},
          {_id: 5, make: 'BMW', model: '320'},
          {_id: 6, make: 'Mitsubishi', model: 'Lancer'}
        ])
      }, 2000)
    })
  }
}

export default data
