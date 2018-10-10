import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import HomePage from './components/homePage'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<HomePage homeMessage='Hi!' />, document.getElementById('root'))
registerServiceWorker()
