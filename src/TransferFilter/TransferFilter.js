import React from 'react'
import TransferFilterClasses from './TransferFilter.module.scss'

const TransferFilter = () => {
  return (
    <div className={TransferFilterClasses['transfer-filter']}>
      <p className={TransferFilterClasses['transfer-filter--text']}>
        Количество пересадок
      </p>
      <ul className={TransferFilterClasses['transfer-filter__list']}>
        <TransferFilterElement label="Все" />
        <TransferFilterElement label="Без пересадок" />
        <TransferFilterElement label="1 пересадка" />
        <TransferFilterElement label="2 пересадки" />
        <TransferFilterElement label="3 пересадки" />
      </ul>
    </div>
  )
}

const TransferFilterElement = ({ label }) => {
  return (
    <li className={TransferFilterClasses['transfer-filter__element']}>
      <label
        className={TransferFilterClasses['transfer-filter__element--label']}
      >
        <input
          type="checkbox"
          className={
            TransferFilterClasses['transfer-filter__element--checkbox']
          }
        />
        {label}
      </label>
    </li>
  )
}

export default TransferFilter
