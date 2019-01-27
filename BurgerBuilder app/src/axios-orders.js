import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-app-5c3b2.firebaseio.com/'
})

export default instance
