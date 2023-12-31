import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import AviaSalesService from './aviasalesService'

const aviasalesService = new AviaSalesService()

const requestFullTickets = async () => {
  console.log(await aviasalesService.requestAllPages())
}

requestFullTickets()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
