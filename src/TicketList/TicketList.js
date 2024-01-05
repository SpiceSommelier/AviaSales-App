import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TicketListClasses from './TicketList.module.scss'
import { fetchTickets } from '../state/fetchTicketsSlice'

import Ticket from '../Ticket'

const TicketList = () => {
  const ticketList = useSelector((state) => state.ticketList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])
  console.log(ticketList.page)
  return (
    <ul className={TicketListClasses['ticket-list']}>
      {ticketList.page.map((element, index) => (
        <Ticket
          price={element.price}
          carrier={element.carrier}
          segments={element.segments}
          key={`${index}`}
        />
      ))}
    </ul>
  )
}

export default TicketList
