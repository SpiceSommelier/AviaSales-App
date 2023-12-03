import React from 'react'
import TicketClasses from './Ticket.module.scss'

const Ticket = () => {
  return (
    <li className={TicketClasses.ticket}>
      <div className={TicketClasses.ticket__price}>13400 Р</div>
      <img
        className={TicketClasses.ticket__logo}
        alt="airline logo"
        src="s7Logo.svg"
      />
      <DescriptionRow />
      <DescriptionRow />
    </li>
  )
}

const DescriptionRow = () => {
  return (
    <>
      <TicketDescription headline="MOW – HKT" text="10:45 – 08:00" />
      <TicketDescription headline="В пути" text="21ч 15м" />
      <TicketDescription headline="2 пересадки" text="HKG, JNB" />
    </>
  )
}

const TicketDescription = ({ headline, text }) => {
  return (
    <div className={TicketClasses['ticket__description']}>
      <h2 className={TicketClasses['ticket__description--headline']}>
        {headline}
      </h2>
      <p className={TicketClasses['ticket__description--text']}>{text}</p>
    </div>
  )
}

export default Ticket
