import { configureStore } from '@reduxjs/toolkit'
import transferFilterReducer from './transferFilterSlice'

export default configureStore({
  reducer: {
    transferFilterList: transferFilterReducer,
  },
})
