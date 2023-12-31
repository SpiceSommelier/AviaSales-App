import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import transferFilterReducer from './transferFilterSlice'

export default configureStore(
  {
    reducer: {
      transferFilterList: transferFilterReducer,
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
)
