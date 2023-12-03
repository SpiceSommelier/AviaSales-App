import React from 'react'
import TicketListClasses from './TicketList.module.scss'

import Ticket from '../Ticket'

const TicketList = () => {
  return (
    <ul className={TicketListClasses['ticket-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  )
}

export default TicketList
