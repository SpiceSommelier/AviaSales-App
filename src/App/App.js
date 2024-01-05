import React from 'react'
import AppClasses from './App.module.scss'
import { Provider } from 'react-redux'

import store from '../state'
import TicketFilter from '../TicketFilter'
import TransferFilter from '../TransferFilter'
import TicketList from '../TicketList/'

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <img src="logo.svg" alt="logo" className={AppClasses.logo} />
        <main className={AppClasses.main}>
          <TicketFilter />
          <TransferFilter />
          <TicketList />
        </main>
      </Provider>
    </React.Fragment>
  )
}

export default App
