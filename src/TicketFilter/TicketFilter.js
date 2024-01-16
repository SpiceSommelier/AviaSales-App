import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ticketSort, ticketFilter } from '../state/fetchTicketsSlice'
import TicketFilterClasses from './TicketFilter.module.scss'

const TicketFilter = () => {
  return (
    <div className={TicketFilterClasses['ticket-filter']}>
      <FilterElement label={'самый дешевый'} />
      <FilterElement label={'самый быстрый'} />
      <FilterElement label={'оптимальный'} />
    </div>
  )
}

const FilterElement = ({ label, chosen = false }) => {
  let elementClass = [TicketFilterClasses['ticket-filter__element']]
  const tickets = useSelector((state) => state.ticketList)
  const filters = useSelector((state) => state.transferFilterList)
  const { sortParam } = tickets
  if (sortParam === label) {
    chosen = true
  }
  const dispatch = useDispatch()
  const sort = () => {
    dispatch(ticketSort(label))
    dispatch(ticketFilter(filters))
  }
  if (chosen)
    elementClass.push(TicketFilterClasses['ticket-filter__element--chosen'])
  elementClass = elementClass.join(' ')
  return (
    <div onClick={sort} className={elementClass}>
      {label}
    </div>
  )
}

export default TicketFilter
