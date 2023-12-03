import React from 'react'
import AppClasses from './App.module.scss'

import TicketFilter from '../TicketFilter'
import TransferFilter from '../TransferFilter'
import TicketList from '../TicketList/'

const App = () => {
  return (
    <React.Fragment>
      <img src="logo.svg" alt="logo" className={AppClasses.logo} />
      <main className={AppClasses.main}>
        <TicketFilter />
        <TransferFilter />
        <TicketList />
      </main>
    </React.Fragment>
  )
}

export default App
