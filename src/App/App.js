import React from 'react'
import AppClasses from './App.module.scss'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import store from '../state'
import TicketFilter from '../TicketFilter'
import TransferFilter from '../TransferFilter'
import TicketList from '../TicketList/'

const App = () => {
  const tickets = store.getState()
  return (
    <React.Fragment>
      <Provider store={store}>
        <img src="logo.svg" alt="logo" className={AppClasses.logo} />
        <main className={`${AppClasses.main}`}>
          <Loader />
          <TicketFilter />
          <TransferFilter />
          <TicketList />
        </main>
      </Provider>
    </React.Fragment>
  )
}

const Loader = () => {
  const tickets = useSelector((state) => state.ticketList)
  const visible = () => tickets.completeLoading ? 'none' : 'block'
  return (
    <div
      className={AppClasses.loading}
      style={{
        transform: `scaleX(${(tickets.ticketList.length / 7229) * 100}%)`,
        display: visible(),
      }}
    />
  )
}

export default App
