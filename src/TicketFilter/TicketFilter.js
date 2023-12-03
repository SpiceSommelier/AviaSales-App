import React from 'react'
import TicketFilterClasses from './TicketFilter.module.scss'

const TicketFilter = () => {
  return (
    <div className={TicketFilterClasses['ticket-filter']}>
      <FilterElement label={'самый дешевый'} chosen={true} />
      <FilterElement label={'самый быстрый'} />
      <FilterElement label={'оптимальный'} />
    </div>
  )
}

const FilterElement = ({ label, chosen = false }) => {
  let elementClass = [TicketFilterClasses['ticket-filter__element']]
  if (chosen)
    elementClass.push(TicketFilterClasses['ticket-filter__element--chosen'])
  elementClass = elementClass.join(' ')
  return <div className={elementClass}>{label}</div>
}

export default TicketFilter
