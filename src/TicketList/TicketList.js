import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TicketListClasses from './TicketList.module.scss'
import { Alert, Spin } from 'antd'
import {
  fetchTickets,
  requestId,
  ticketFilter,
  ticketSort,
} from '../state/fetchTicketsSlice'

import Ticket from '../Ticket'

const TicketList = () => {
  const tickets = useSelector((state) => state.ticketList)
  const filters = useSelector((state) => state.transferFilterList)
  const { completeLoading, error, loading, ticketList, token, filteredList } =
    tickets
  const dispatch = useDispatch()
  useEffect(() => {
    if (!token) {
      dispatch(requestId())
    }
  }, [dispatch, token])
  useEffect(() => {
    if (!completeLoading && token) {
      dispatch(fetchTickets(token))
      dispatch(ticketSort('самый дешевый'))
      dispatch(ticketFilter(filters))
    }
  }, [token, dispatch, ticketList, completeLoading, error])
  useEffect(() => {
    dispatch(ticketSort(tickets.sortParam))
    dispatch(ticketFilter(filters))
  }, [filters, dispatch])
  if (filteredList.length > 0) {
    return (
      <ul className={TicketListClasses['ticket-list']}>
        {filteredList.map((element, index) =>
          index > 100 ? null : (
            <Ticket
              price={element.price}
              carrier={element.carrier}
              segments={element.segments}
              key={`${index}`}
            />
          )
        )}
      </ul>
    )
  } else if (completeLoading) {
    return (
      <Alert
        message="Рейсов, подходящих под заданные фильтры, не найдено."
        type="info"
        style={{
          marginTop: '20px',
        }}
      />
    )
  } else {
    return (
      <Spin
        size="large"
        style={{
          marginTop: '20px',
        }}
      />
    )
  }
}

export default TicketList
