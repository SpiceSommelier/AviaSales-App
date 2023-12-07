import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkTransfer } from '../state/transferFilterSlice'
import TransferFilterClasses from './TransferFilter.module.scss'

const TransferFilter = () => {
  const transferFilterList = useSelector((state) => state.transferFilterList)
  return (
    <div className={TransferFilterClasses['transfer-filter']}>
      <p className={TransferFilterClasses['transfer-filter--text']}>
        Количество пересадок
      </p>
      <ul className={TransferFilterClasses['transfer-filter__list']}>
        <TransferFilterElement
          label="Все"
          checked={transferFilterList.allTransfers}
          id="allTransfers"
        />
        <TransferFilterElement
          label="Без пересадок"
          checked={transferFilterList.withoutTransfers}
          id="withoutTransfers"
        />
        <TransferFilterElement
          label="1 пересадка"
          checked={transferFilterList['1transfer']}
          id="1transfer"
        />
        <TransferFilterElement
          label="2 пересадки"
          checked={transferFilterList['2transfers']}
          id="2transfers"
        />
        <TransferFilterElement
          label="3 пересадки"
          checked={transferFilterList['3transfers']}
          id="3transfers"
        />
      </ul>
    </div>
  )
}

const TransferFilterElement = ({ label, checked, id }) => {
  const dispatch = useDispatch()
  const check = (evt) => {    
    dispatch(checkTransfer({ id, value: evt.target.checked }))
  }
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
          checked={checked}
          onChange={check}
        />
        {label}
      </label>
    </li>
  )
}

export default TransferFilter
