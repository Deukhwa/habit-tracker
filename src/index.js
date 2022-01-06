import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/js/all.js'
import './components/simpleHabit.jsx'
import SimpleHabit from './components/simpleHabit.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
